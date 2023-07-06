import React, { useState, useEffect, useMemo } from 'react';
import { LeafletMap } from '@gns-science/toshi-nest';
import { GlobalStyles } from '@mui/material';
import { usePaginationFragment } from 'react-relay';
import '../../css/leaflet.timedimension.control.css';
import { LatLngExpression } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { ComboRuptureMapPageState } from './comboRuptureMapPageReducer';
import { ComboRuptureMapPageQuery$data } from './__generated__/ComboRuptureMapPageQuery.graphql';
import { RuptureAnimationPageQuery } from '../ruptureAnimation/__generated__/RuptureAnimationPageQuery.graphql';
import { RuptureAnimationPage_queryRoot$key } from '../ruptureAnimation/__generated__/RuptureAnimationPage_queryRoot.graphql';
import { ruptureAnimationPage_queryRoot } from '../ruptureAnimation/RuptureAnimationPage';
import ComboInfoPanelComponent, { ComboInfoPanelComponentProps } from './ComboInfoPanelComponent';

import TimeDimensionLayerContext, { TimeDimensionLayerState } from './store';

type ComboRuptureMapComponentProps = {
  queryData: ComboRuptureMapPageQuery$data;
  ruptureConnectionRef: RuptureAnimationPage_queryRoot$key;
  fullscreen: boolean;
  setFullscreen: (fullscreen: boolean) => void;
  isPending: boolean;
  mapControlsState: ComboRuptureMapPageState;
};

export const ComboRuptureMapComponent = (props: ComboRuptureMapComponentProps) => {
  // Map
  const { queryData, ruptureConnectionRef, fullscreen, setFullscreen, isPending, mapControlsState } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(5);

  const [timeDimensionLayerState, timeDimensionLayerStateSet] = useState<TimeDimensionLayerState>({ timeIndex: 20 });

  const onNewTimeIndexHandler = (e: number) => {
    timeDimensionLayerStateSet({ timeIndex: e });
  };

  // Animation
  const { data, hasNext, loadNext } = usePaginationFragment<RuptureAnimationPageQuery, RuptureAnimationPage_queryRoot$key>(ruptureAnimationPage_queryRoot, ruptureConnectionRef);
  const [needsMore, setNeedsMore] = useState<boolean>(false);
  const [hasNoMore, setHasNoMore] = useState<boolean>(false);
  const totalRuptures = useMemo(() => {
    return queryData?.SOLVIS_filter_ruptures?.total_count;
  }, [queryData]);

  const ruptureData = useMemo(() => {
    if (mapControlsState.showAnimation) {
      return data?.SOLVIS_filter_ruptures?.edges?.map((edge) => {
        return JSON.parse(edge?.node?.fault_surfaces);
      });
    } else {
      return [];
    }
  }, [data, mapControlsState]);

  // Aggregation
  const geojsonSurfacesData = queryData?.SOLVIS_filter_rupture_sections?.fault_surfaces;
  const geojsonTracesData = queryData?.SOLVIS_filter_rupture_sections?.fault_traces;

  // Location
  const locationData = queryData?.SOLVIS_locations_by_id?.edges?.map((edge) => {
    return edge?.node?.radius_geojson;
  });

  const geoJson = useMemo(() => {
    if (geojsonSurfacesData == null || geojsonSurfacesData == undefined) return [];

    if (geojsonSurfacesData && geojsonTracesData && locationData && locationData.length > 0) {
      if (mapControlsState.showSurfaces) {
        return [...locationData, geojsonSurfacesData, geojsonTracesData];
      } else {
        return [...locationData, geojsonTracesData];
      }
    } else if (geojsonSurfacesData && geojsonTracesData) {
      if (mapControlsState.showSurfaces) {
        return [geojsonSurfacesData, geojsonTracesData];
      } else {
        return [geojsonTracesData];
      }
    } else if (locationData && locationData.length > 0) {
      return [...locationData];
    } else {
      return [];
    }
  }, [geojsonSurfacesData, geojsonTracesData, locationData, mapControlsState]);

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
    position: 'bottomright',
    displayDate: false,
    maxSpeed: 5,
    minSpeed: 1,
    playerOptions: {
      loop: true,
    },
  };

  useEffect(() => {
    if (needsMore && hasNext && mapControlsState.showAnimation) {
      loadNext(5);
      setNeedsMore(false);
    }
  }, [hasNext, needsMore, loadNext, mapControlsState]);

  useEffect(() => {
    if (!needsMore && !hasNoMore) {
      setHasNoMore(false);
    }
  }, [needsMore, hasNoMore]);

  const surfaceProperties = useMemo(() => {
    return data?.SOLVIS_filter_ruptures?.edges?.map((edge) => {
      return { magnitude: edge?.node?.magnitude, area: edge?.node?.area, length: edge?.node?.length, rate_weighted_mean: edge?.node?.rate_weighted_mean };
    });
  }, [data]);

  const timeDimensionLayerProps = {
    geoJsonData: (ruptureData as typeof GeoJsonObject[]) || '',
    setTimeDimensionNeedsMore: setNeedsMore,
    setTimeDimensionHasNoMore: setHasNoMore,
    surfaceProperties: surfaceProperties || [],
    timeDimensionTotalLength: totalRuptures || 0,
    onNewTimeIndexHandler: onNewTimeIndexHandler,
  };

  const comboInfoPanelComponentProps: ComboInfoPanelComponentProps = {
    queryData: queryData,
    fullscreen: fullscreen,
    timeDimensionTotalLength: totalRuptures || 0,
    surfaceProperties: surfaceProperties || [],
    mapControlsState: mapControlsState,
  };

  return (
    <>
      <React.Suspense fallback={<SimpleBackdrop />}>
        {isPending && <SimpleBackdrop />}
        <TimeDimensionLayerContext.Provider value={timeDimensionLayerState}>
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
            timeDimension={true}
            timeDimensionOptions={timeDimensionOptions}
            timeDimensionControlOptions={timeDimensionControlOptions}
            timeDimensionLayerProps={timeDimensionLayerProps}
          />
          <ComboInfoPanelComponent {...comboInfoPanelComponentProps} />
        </TimeDimensionLayerContext.Provider>
      </React.Suspense>
    </>
  );
};

export default ComboRuptureMapComponent;
