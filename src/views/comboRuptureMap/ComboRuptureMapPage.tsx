import React, { useState, useEffect, useReducer, useTransition, useMemo } from 'react';
import { LeafletDrawer } from '@gns-science/toshi-nest';
import { Box, Typography } from '@mui/material';
import { useLazyLoadQuery } from 'react-relay';
import '../../css/leaflet.timedimension.control.css';
import { graphql } from 'babel-plugin-relay/macro';
import { HAZARD_MODEL } from '../../utils/environmentVariables';
import { GeoJsonObject } from 'geojson';

import { InfoTooltip } from '../../components/common/InfoTooltip';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { comboRuptureMapPageReducer, comboRuptureMapPageReducerInitialState } from './comboRuptureMapPageReducer';
import { ComboRuptureMapPageQuery } from './__generated__/ComboRuptureMapPageQuery.graphql';

import ComboRuptureMapControls from './ComboRuptureMapPageControls';
import ComboRuptureMapComponent from './ComboRuptureMapComponent';

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
    corupture_fault_names: [state.parentFault],
    minimum_mag: state.magnitudeRange[0],
    maximum_mag: state.magnitudeRange[1],
    minimum_rate: state.rateRange[0],
    maximum_rate: state.rateRange[1],
    model_id: HAZARD_MODEL,
    fault_system: state.faultSystem.slice(0, 3).toUpperCase(),
    sortby: state.sortby,
  });

  const faultTracesGeojson = useMemo(() => {
    return JSON.parse(initialData?.SOLVIS_filter_rupture_sections?.fault_traces);
  }, [initialData]);

  const faultSurfacesGeojson = useMemo(() => {
    return JSON.parse(initialData?.SOLVIS_filter_rupture_sections?.fault_surfaces);
  }, [initialData]);

  const mfdData = useMemo(() => {
    return initialData?.SOLVIS_filter_rupture_sections?.mfd_histogram;
  }, [initialData]);

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
          mapControlsState={state}
        />
      </Box>
      <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'400px'} fullscreen={fullscreen} openAtRender={true}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Rupture Map
          <InfoTooltip content={'tooltip to come'} format={false} />
        </Typography>
        <ComboRuptureMapControls
          startTransition={startTransition}
          isPending={isPending}
          geoJsonError={geoJsonError}
          dispatch={dispatch}
          state={state}
          faultSurfacesGeojson={faultSurfacesGeojson as typeof GeoJsonObject}
          faultTracesGeojson={faultTracesGeojson as typeof GeoJsonObject}
          mfdData={mfdData}
        />
      </LeafletDrawer>
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
    $corupture_fault_names: [String]
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
        corupture_fault_names: $corupture_fault_names
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
        corupture_fault_names: $corupture_fault_names
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
          corupture_fault_names: $corupture_fault_names
          minimum_mag: $minimum_mag
          maximum_mag: $maximum_mag
          minimum_rate: $minimum_rate
          maximum_rate: $maximum_rate
        }
        sortby: $sortby
      )
  }
`;
