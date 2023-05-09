import React, { useState, useEffect, useReducer, useTransition, useMemo } from 'react';
import { LeafletMap, LeafletDrawer, ColorBar, MfdPlot } from '@gns-science/toshi-nest';
import { Box, GlobalStyles, Typography } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import '../../css/leaflet.timedimension.control.css';
import { graphql } from 'babel-plugin-relay/macro';
import { HAZARD_MODEL_ID } from '../../utils/environmentVariables';
import { LatLngExpression } from 'leaflet';

import { InfoTooltip } from '../../components/common/InfoTooltip';
import MultiRuptureMapControls from './MultiRuptureMapPageControls';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { multiRuptureMapPageReducer, multiRuptureMapPageReducerInitialState } from './multiRuptureMapPageReducer';
import { MultiRuptureMapPageQuery, MultiRuptureMapPageQuery$data } from './__generated__/MultiRuptureMapPageQuery.graphql';
type Props = {
  queryData: MultiRuptureMapPageQuery$data;
  fullscreen: boolean;
  setFullscreen: (fullscreen: boolean) => void;
  isPending: boolean;
  setGeoJsonError: (geoJsonError: string | null) => void;
};

export const MultiRuptureMap: React.FC = () => {
  const [state, dispatch] = useReducer(multiRuptureMapPageReducer, multiRuptureMapPageReducerInitialState);
  const [isPending, startTransition] = useTransition();
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [geoJsonError, setGeoJsonError] = useState<string | null>(null);

  const data = useLazyLoadQuery<MultiRuptureMapPageQuery>(multiRuptureMapPageQuery, {
    location_ids: state.locationCodes,
    radius_km: state.radius,
    minimum_mag: state.magnitudeRange[0],
    maximum_mag: state.magnitudeRange[1],
    minimum_rate: state.rateRange[0],
    maximum_rate: state.rateRange[1],
    model_id: HAZARD_MODEL_ID,
    fault_system: state.faultSystem.slice(0, 3).toUpperCase(),
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
        <MultiRuptureMapComponent fullscreen={fullscreen} setFullscreen={setFullscreen} setGeoJsonError={setGeoJsonError} queryData={data} isPending={isPending} />
      </Box>
      <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'400px'} fullscreen={fullscreen}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Multi-Rupture Map
          <InfoTooltip content={'tooltip to come'} format={false} />
        </Typography>
        <MultiRuptureMapControls startTransition={startTransition} isPending={isPending} geoJsonError={geoJsonError} dispatch={dispatch} />
      </LeafletDrawer>
    </>
  );
};

export const MultiRuptureMapComponent: React.FC<Props> = (props: Props) => {
  const { queryData, fullscreen, setFullscreen, isPending, setGeoJsonError } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(5);

  const locationData = queryData?.SOLVIS_locations_by_id?.edges?.map((edge) => {
    return edge?.node?.radius_geojson;
  });

  const geoJsonData = queryData?.SOLVIS_filter_rupture_sections?.fault_surfaces;

  const mfdData = queryData?.SOLVIS_filter_rupture_sections?.mfd_histogram;

  const colorScale = useMemo(() => {
    if (queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels && queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs) {
      return {
        levels: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels.map((level) => level?.toExponential(0)) ?? [],
        hexrgbs: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs.map((color) => color?.toString()) ?? [],
      };
    }
  }, [queryData]);

  const geoJson = useMemo(() => {
    if (geoJsonData !== null && geoJsonData !== undefined && locationData && locationData.length > 0) {
      return [...locationData, geoJsonData];
    } else if (geoJsonData) {
      return [geoJsonData];
    } else if (locationData && locationData.length > 0) {
      return [...locationData];
    } else {
      return [];
    }
  }, [geoJsonData, locationData]);

  useEffect(() => {
    if (locationData && locationData.length > 0 && !geoJsonData) {
      setGeoJsonError('No ruptures satisfy the filter.');
    } else {
      setGeoJsonError(null);
    }
  }, [geoJsonData, locationData, setGeoJsonError]);

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

export const MultiRuptureMapPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <MultiRuptureMap />
    </React.Suspense>
  );
};

export default MultiRuptureMapPage;

export const multiRuptureMapPageQuery = graphql`
  query MultiRuptureMapPageQuery(
    $model_id: String!
    $fault_system: String!
    $location_ids: [String]!
    $radius_km: Int!
    $minimum_mag: Float
    $maximum_mag: Float
    $minimum_rate: Float
    $maximum_rate: Float
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
      color_scale: { name: "inferno" }
    ) {
      model_id
      section_count
      fault_surfaces
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
  }
`;
