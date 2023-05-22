import React, { useState, useEffect, useReducer, useTransition, useMemo } from 'react';
import { LeafletMap, LeafletDrawer, ColorBar, MfdPlot } from '@gns-science/toshi-nest';
import { Box, GlobalStyles, Typography } from '@mui/material';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import '../../css/leaflet.timedimension.control.css';
import { graphql } from 'babel-plugin-relay/macro';
import { HAZARD_MODEL } from '../../utils/environmentVariables';
import { LatLngExpression } from 'leaflet';
import { GeoJsonObject } from 'geojson';

import { InfoTooltip } from '../../components/common/InfoTooltip';
import ComboRuptureMapControls from './ComboRuptureMapPageControls';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { comboRuptureMapPageReducer, comboRuptureMapPageReducerInitialState } from './comboRuptureMapPageReducer';
import { ComboRuptureMapPageQuery, ComboRuptureMapPageQuery$data } from './__generated__/ComboRuptureMapPageQuery.graphql';

// import { ruptureAnimationPageReducer, ruptureAnimationPageReducerInitialState } from '../ruptureAnimation/ruptureAnimationPageReducer';
import { RuptureAnimationPageQuery } from '../ruptureAnimation/__generated__/RuptureAnimationPageQuery.graphql';
import { RuptureAnimationPage_queryRoot$key } from '../ruptureAnimation/__generated__/RuptureAnimationPage_queryRoot.graphql';
import { ruptureAnimationPage_queryRoot } from '../ruptureAnimation/RuptureAnimationPage';

type Props = {
  queryData: ComboRuptureMapPageQuery$data;
  ruptureConnectionRef: RuptureAnimationPage_queryRoot$key;
  fullscreen: boolean;
  setFullscreen: (fullscreen: boolean) => void;
  isPending: boolean;
  setGeoJsonError: (geoJsonError: string | null) => void;
};

export const ComboRuptureMap: React.FC = () => {
  const [state, dispatch] = useReducer(comboRuptureMapPageReducer, comboRuptureMapPageReducerInitialState);
  const [isPending, startTransition] = useTransition();
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [geoJsonError, setGeoJsonError] = useState<string | null>(null);

  const initialData = useLazyLoadQuery<ComboRuptureMapPageQuery>(comboRuptureMapPageQuery, {
    first: 5,
    location_ids: state.locationCodes,
    radius_km: state.radius,
    minimum_mag: state.magnitudeRange[0],
    maximum_mag: state.magnitudeRange[1],
    minimum_rate: state.rateRange[0],
    maximum_rate: state.rateRange[1],
    model_id: HAZARD_MODEL,
    fault_system: state.faultSystem.slice(0, 3).toUpperCase(),
    sortby: [],
  });

  useEffect(() => {
    function updateScrollHeight() {
      setScrollHeight(window.scrollY);
    }
    window.addEventListener('scroll', updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, []);

  return (
    <>
      <Box id="map" sx={{ width: '100%', height: '80vh' }}>
        <ComboRuptureMapComponent
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
          setGeoJsonError={setGeoJsonError}
          ruptureConnectionRef={initialData}
          queryData={initialData}
          isPending={isPending}
        />
      </Box>
      <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'400px'} fullscreen={fullscreen}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Combo-Rupture Map
          <InfoTooltip content={'tooltip to come'} format={false} />
        </Typography>
        <ComboRuptureMapControls startTransition={startTransition} isPending={isPending} geoJsonError={geoJsonError} dispatch={dispatch} />
      </LeafletDrawer>
    </>
  );
};

export const ComboRuptureMapComponent: React.FC<Props> = (props: Props) => {
  // Map
  const { queryData, ruptureConnectionRef, fullscreen, setFullscreen, isPending, setGeoJsonError } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  // Animation
  const { data, hasNext, loadNext } = usePaginationFragment<RuptureAnimationPageQuery, RuptureAnimationPage_queryRoot$key>(ruptureAnimationPage_queryRoot, ruptureConnectionRef);
  const [needsMore, setNeedsMore] = useState<boolean>(false);
  const [hasNoMore, setHasNoMore] = useState<boolean>(false);
  const totalRuptures = useMemo(() => {
    return queryData?.SOLVIS_filter_ruptures?.total_count;
  }, [queryData]);
  const ruptureData = useMemo(() => {
    return data?.SOLVIS_filter_ruptures?.edges?.map((edge) => {
      return JSON.parse(edge?.node?.fault_surfaces);
    });
  }, [data]);

  // Aggregation
  const geojsonSurfacesData = queryData?.SOLVIS_filter_rupture_sections?.fault_surfaces;
  const geojsonTracesData = queryData?.SOLVIS_filter_rupture_sections?.fault_traces;
  const mfdData = queryData?.SOLVIS_filter_rupture_sections?.mfd_histogram;

  const colorScale = useMemo(() => {
    if (queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels && queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs) {
      return {
        levels: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels.map((level) => level?.toExponential(0)) ?? [],
        hexrgbs: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs.map((color) => color?.toString()) ?? [],
      };
    }
  }, [queryData]);

  // Location
  const locationData = queryData?.SOLVIS_locations_by_id?.edges?.map((edge) => {
    return edge?.node?.radius_geojson;
  });

  const geoJson = useMemo(() => {
    //   console.log('locationData');
    //   console.log(locationData);

    //   console.log('geojsonSurfacesData');
    //   console.log(geojsonSurfacesData);

    //   console.log('geojsonTracesData');
    //   console.log(geojsonTracesData);

    if (geojsonSurfacesData == null || geojsonSurfacesData == undefined) return [];

    if (geojsonSurfacesData && geojsonTracesData && locationData && locationData.length > 0) {
      return [...locationData, geojsonSurfacesData, geojsonTracesData];
    } else if (geojsonSurfacesData && geojsonTracesData) {
      return [geojsonSurfacesData, geojsonTracesData];
    } else if (locationData && locationData.length > 0) {
      return [...locationData];
    } else {
      return [];
    }
  }, [geojsonSurfacesData, geojsonTracesData, locationData]);

  useEffect(() => {
    if (locationData && locationData.length > 0 && !geojsonSurfacesData) {
      setGeoJsonError('No ruptures satisfy the filter.');
    } else {
      setGeoJsonError(null);
    }
  }, [geojsonSurfacesData, locationData, setGeoJsonError]);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeature = (feature: any, layer: any) => {
    if (feature?.properties?.FaultID) {
      const faultId = feature?.properties?.FaultID;
      const faultName = feature?.properties?.FaultName;
      const ruptureCount = feature?.properties?.['Magnitude.count'];
      const participationRate = feature?.properties?.['rate_weighted_mean.sum'];
      const upperMag = feature?.properties?.['Magnitude.max'];
      const lowerMag = feature?.properties?.['Magnitude.min'];
      const dipDegrees = feature?.properties?.DipDeg;
      const dipDirection = feature?.properties?.DipDir;
      const rake = feature?.properties?.Rake;
      const upperDepth = feature?.properties?.UpDepth;
      const lowerDepth = feature?.properties?.LowDepth;

      const popupContent = `
        <div>
        <p>Fault ID: ${faultId}</p>
        <p>Fault Name: ${faultName}</p>
        <p>Rupture Count: ${ruptureCount}</p>
        <p>Participation Rate: ${participationRate.toExponential(2)}</p>
        <p>Upper Magnitude: ${upperMag.toFixed(2)}</p>
        <p>Lower Magnitude: ${lowerMag.toFixed(2)}</p>
        <p>Dip Degrees: ${dipDegrees}</p>
        <p>Dip Direction: ${dipDirection}</p>
        <p>Rake: ${rake}</p>
        <p>Upper Depth (km): ${upperDepth.toFixed(2)}</p>
        <p>Lower Depth (km): ${lowerDepth.toFixed(2)}</p>
        </div>
      `;
      layer.bindPopup(popupContent);
    }
  };

  // Animation
  const timeArray = useMemo(() => {
    return (
      totalRuptures &&
      Array(totalRuptures)
        .fill(0)
        .map((_, i) => i + 1)
    );
  }, [totalRuptures]);

  const timeDimensionOptions = {
    currentTime: 1,
    times: timeArray || [],
    timeInterval: 'P1M/2021-01-01T00:00:00Z/P1M',
    period: 'P1D',
  };

  const timeDimensionControlOptions = {
    position: 'topright',
    displayDate: false,
    maxSpeed: 5,
    minSpeed: 1,
    playerOptions: {
      loop: true,
    },
  };

  useEffect(() => {
    if (needsMore && hasNext) {
      loadNext(5);
      setNeedsMore(false);
    }
  }, [hasNext, needsMore, loadNext]);

  useEffect(() => {
    if (!needsMore && !hasNoMore) {
      setHasNoMore(false);
    }
  }, [needsMore, hasNoMore]);

  return (
    <>
      <React.Suspense fallback={<SimpleBackdrop />}>
        {isPending && <SimpleBackdrop />}
        <GlobalStyles styles={{ '.leaflet-popup-content p': { margin: '0' } }} />
        <LeafletMap
          zoom={zoom}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
          nzCentre={nzCentre as typeof LatLngExpression}
          geoJsonData={geoJson}
          height={'80vh'}
          width={'100%'}
          setFullscreen={setFullscreen}
          onEachFeature={onEachFeature}
          // zoom={zoom}
          // zoomLevel={zoomLevel}
          // setZoomLevel={setZoomLevel}
          // nzCentre={nzCentre as typeof LatLngExpression}
          // geoJsonData={locationData ? locationData : ['']}
          // height={'80vh'}
          // width={'100%'}
          // setFullscreen={setFullscreen}

          timeDimensionOptions={timeDimensionOptions}
          timeDimension={true}
          // eslint-disable-next-line prettier/prettier
          timeDimensionGeoJsonData={(ruptureData as typeof GeoJsonObject[]) || ''}
          timeDimensionUnderlay={'' as unknown as typeof GeoJsonObject}
          timeDimensionControlOptions={timeDimensionControlOptions}
          setTimeDimensionNeedsMore={setNeedsMore}
          setTimeDimensionHasNoMore={setHasNoMore}
          surfaceProperties={[]} // surfaceProperties ||
          timeDimensionTotalLength={totalRuptures || 0}
        />
        {mfdData && (
          <Box
            style={
              !fullscreen
                ? {
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    zIndex: 119700,
                    top: '-435px',
                    left: 'calc(100% - 396px)',
                    width: '395px',
                    borderRadius: '4px',
                    borderWidth: '1px',
                    border: '2px solid rgba(0,0,0,0.2)',
                    backgroundClip: 'padding-box',
                  }
                : {
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    zIndex: 119700,
                    bottom: '20px',
                    left: 'calc(100% - 396px)',
                    width: '395px',
                    borderRadius: '4px',
                    borderWidth: '1px',
                    border: '2px solid rgba(0,0,0,0.2)',
                    backgroundClip: 'padding-box',
                  }
            }
          >
            <MfdPlot
              data={mfdData}
              width={430}
              height={300}
              xLabel="Magnitude"
              yLabel="Rate"
              yLabelOffset={35}
              xLabelOffset={5}
              header="Magnitude Frequency Distribution"
              yScaleDomain={[1e-7, 1e-1]}
              xScaleDomain={[6.7, 9.6]}
              lineColours={['green', 'red']}
              legendDomain={['Incremental', 'Cumulative']}
            />
            <ColorBar heading={'Participation Rate'} width={350} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} linear={false} />
          </Box>
        )}
      </React.Suspense>
    </>
  );
};

export const ComboRuptureMapPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <ComboRuptureMap />
    </React.Suspense>
  );
};

export default ComboRuptureMapPage;

export const comboRuptureMapPageQuery = graphql`
  query ComboRuptureMapPageQuery(
    $first: Int!
    $after: String
    $model_id: String!
    $fault_system: String!
    $location_ids: [String]!
    $radius_km: Int!
    $minimum_mag: Float
    $maximum_mag: Float
    $minimum_rate: Float
    $maximum_rate: Float
    $sortby: [SimpleSortRupturesArgs]
  ) {
    SOLVIS_locations_by_id(location_ids: $location_ids) {
      edges {
        node {
          location_id
          name
          radius_geojson(radius_km: $radius_km, style: { stroke_color: "royalblue", stroke_width: 3, stroke_opacity: 1, fill_opacity: 0.01, fill_color: "royalblue" })
        }
      }
    }

    SOLVIS_filter_rupture_sections(
      filter: {
        model_id: $model_id
        location_ids: $location_ids
        fault_system: $fault_system
        radius_km: $radius_km
        minimum_mag: $minimum_mag
        maximum_mag: $maximum_mag
        minimum_rate: $minimum_rate
        maximum_rate: $maximum_rate
      }
    ) {
      model_id
      section_count
      fault_surfaces(style: { stroke_color: "silver", fill_color: "silver", fill_opacity: 0.25 })
      fault_traces(color_scale: { name: "inferno" }, style: { stroke_width: 5 })
      color_scale(name: "inferno") {
        name
        min_value
        max_value
        color_map {
          levels
          hexrgbs
        }
      }
      mfd_histogram {
        bin_center
        rate
        cumulative_rate
      }
    }

    SOLVIS_filter_ruptures(
      first: $first
      after: $after
      filter: {
        model_id: $model_id
        fault_system: $fault_system
        location_ids: $location_ids
        radius_km: $radius_km
        minimum_mag: $minimum_mag
        maximum_mag: $maximum_mag
        minimum_rate: $minimum_rate
        maximum_rate: $maximum_rate
      }
      sortby: $sortby
    ) {
      total_count
    }

    ...RuptureAnimationPage_queryRoot
      @arguments(
        first: $first
        after: $after
        filter: {
          model_id: $model_id
          fault_system: $fault_system
          location_ids: $location_ids
          radius_km: $radius_km
          minimum_mag: $minimum_mag
          maximum_mag: $maximum_mag
          minimum_rate: $minimum_rate
          maximum_rate: $maximum_rate
        }
        sortby: $sortby
      )
  }
`;
