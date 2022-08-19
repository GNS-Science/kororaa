import React, { useEffect, useState, useReducer } from 'react';
import { LeafletMap, LeafletDrawer } from '@gns-science/toshi-nest';
import { graphql } from 'babel-plugin-relay/macro';

import HazardMapsControls from './__generated__/HazardMapsControls';
import { hazardMapsReducer, initialState } from './hazardMapReducer';
import { useLazyLoadQuery } from 'react-relay';
import { HazardMapsQuery } from './__generated__/HazardMapsQuery.graphql';

const HazardMaps: React.FC = () => {
  const [state, dispatch] = useReducer(hazardMapsReducer, initialState);

  const data = useLazyLoadQuery<HazardMapsQuery>(hazardMapsQuery, {
    grid_id: 'NZ_0_1_NB_1_0',
    hazard_model_ids: ['SLT_TAG_FINAL'],
    imts: state.imts,
    aggs: state.aggs,
    vs30s: state.vs30s,
    poes: state.poes,
  });

  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [geoJson, setGeoJson] = useState<string[]>([]);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  useEffect(() => {
    let geoJsonData: string[] = [];
    if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
      geoJsonData = data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.geojson);
    }
    setGeoJson(geoJsonData);
  }, [data]);

  return (
    <>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}>
        <HazardMapsControls state={state} dispatch={dispatch} />
      </LeafletDrawer>
    </>
  );
};

export default HazardMaps;

export const hazardMapsQuery = graphql`
  query HazardMapsQuery($grid_id: RegionGrid, $hazard_model_ids: [String], $imts: [String], $aggs: [String], $vs30s: [Float], $poes: [Float]) {
    gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {
      ok
      gridded_hazard {
        grid_id
        hazard_model
        imt
        agg
        geojson
      }
    }
  }
`;
