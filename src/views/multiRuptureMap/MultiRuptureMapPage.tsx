import React, { useState, useEffect, useReducer, useTransition } from 'react';
import { LeafletMap, LeafletDrawer } from '@gns-science/toshi-nest';
import { Box, Typography } from '@mui/material';
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
  setFullscreen: (fullscreen: boolean) => void;
  isPending: boolean;
};

export const MultiRuptureMapComponent: React.FC = () => {
  const [state, dispatch] = useReducer(multiRuptureMapPageReducer, multiRuptureMapPageReducerInitialState);
  const [isPending, startTransition] = useTransition();
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const initialData = useLazyLoadQuery<MultiRuptureMapPageQuery>(multiRuptureMapPageQuery, {
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
        <MultiRuptureMapPaginationComponent setFullscreen={setFullscreen} queryData={initialData} isPending={isPending} />
      </Box>
      <LeafletDrawer drawerHeight={'80vh'} headerHeight={`${100 - scrollHeight}px`} width={'400px'} fullscreen={fullscreen}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Multi-Rupture Map
          <InfoTooltip content={'tooltip to come'} format={false} />
        </Typography>
        <MultiRuptureMapControls startTransition={startTransition} isPending={isPending} dispatch={dispatch} />
      </LeafletDrawer>
    </>
  );
};

export const MultiRuptureMapPaginationComponent: React.FC<Props> = (props: Props) => {
  const { queryData, setFullscreen, isPending } = props;
  const [zoomLevel, setZoomLevel] = useState<number>(5);

  const locationData = queryData?.SOLVIS_locations_by_id?.edges?.map((edge) => {
    return edge?.node?.radius_geojson;
  });

  const geoJsonData = queryData?.SOLVIS_filter_rupture_sections?.fault_surfaces;
  console.log(geoJsonData);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <>
      <React.Suspense fallback={<SimpleBackdrop />}>
        {isPending && <SimpleBackdrop />}
        <LeafletMap
          zoom={zoom}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
          nzCentre={nzCentre as typeof LatLngExpression}
          geoJsonData={locationData && geoJsonData ? [locationData, geoJsonData] : []}
          height={'80vh'}
          width={'100%'}
          setFullscreen={setFullscreen}
        />
      </React.Suspense>
    </>
  );
};

export const MultiRuptureMapPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <MultiRuptureMapComponent />
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
          radius_geojson(radius_km: $radius_km, style: { stroke_color: "royalblue", stroke_width: 3, stroke_opacity: 0.2, fill_opacity: 0.5, fill_color: "royalblue" })
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
      fault_surfaces
    }
  }
`;
