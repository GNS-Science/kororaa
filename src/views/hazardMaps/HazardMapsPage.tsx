import React, { useReducer, useState, useMemo, useTransition } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { LeafletDrawer } from '@gns-science/toshi-nest';

import HazardMaps from './HazardMaps';
import { hazardMapsReducer, initialState } from './hazardMapReducer';
import HazardMapsControls from './HazardMapsControls';
import { flexParentCenter } from '../../utils/styleUtils';
import { GRID_ID, HAZARD_MODEL } from '../../utils/environmentVariables';
import { getTickValues, ColorScale } from './hazardMaps.service';
import { HazardMapsPageQuery } from './__generated__/HazardMapsPageQuery.graphql';

const PageContainer = styled(Box)(({ theme }) => ({
  ...flexParentCenter,
  margin: '0 5% 0 5% 0.5% 0.5%',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '0 2% 0 2% 0.2% 0.2%',
  },
}));

const HazardMapsPage: React.FC = () => {
  const [state, dispatch] = useReducer(hazardMapsReducer, initialState);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const data = useLazyLoadQuery<HazardMapsPageQuery>(hazardMapsPageQuery, {
    grid_id: GRID_ID,
    hazard_model_ids: [HAZARD_MODEL],
    imts: state.spectralPeriod,
    aggs: state.statistic,
    vs30s: state.vs30,
    poes: [state.poe[0]],
    color_scale: state.color_scale,
    color_scale_vmax: state.color_scale_vmax,
    fill_opacity: state.fill_opacity,
    stroke_width: state.stroke_width,
    stroke_opacity: state.stroke_opacity,
  });

  const geoJson = useMemo<string[]>(() => {
    if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
      return data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.hazard_map?.geojson);
    } else {
      return [];
    }
  }, [data]);

  const colorScale = useMemo<ColorScale | undefined>(() => {
    if (
      data &&
      data.gridded_hazard &&
      data.gridded_hazard.gridded_hazard &&
      data.gridded_hazard.gridded_hazard[0] &&
      data.gridded_hazard.gridded_hazard[0].hazard_map?.colour_scale?.levels &&
      data.gridded_hazard.gridded_hazard[0].hazard_map.colour_scale.hexrgbs
    ) {
      return {
        levels: getTickValues(data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.levels.map((level) => Number(level))) ?? [],
        hexrgbs: data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.hexrgbs.map((color) => color?.toString()) ?? [],
      };
    }
  }, [data]);

  return (
    <PageContainer>
      <Box role="hazardMapsView" sx={{ ...flexParentCenter, justifyContent: 'center', height: '100%', width: '100%' }}>
        <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}>
          <HazardMapsControls isPending={isPending} startTransition={startTransition} geoJson={geoJson} state={state} dispatch={dispatch} />
        </LeafletDrawer>
        <React.Suspense fallback={<CircularProgress />}>
          <HazardMaps geoJson={geoJson} setFullscreen={setFullscreen} colorScale={colorScale} />
        </React.Suspense>
      </Box>
    </PageContainer>
  );
};

export default HazardMapsPage;

export const hazardMapsPageQuery = graphql`
  query HazardMapsPageQuery(
    $grid_id: RegionGrid
    $hazard_model_ids: [String]
    $imts: [String]
    $aggs: [String]
    $vs30s: [Float]
    $poes: [Float]
    $color_scale: String
    $color_scale_vmax: Float
    $fill_opacity: Float
    $stroke_width: Float
    $stroke_opacity: Float
  ) {
    gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {
      ok
      gridded_hazard {
        grid_id
        hazard_model
        imt
        agg
        hazard_map(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity) {
          geojson
          colour_scale {
            levels
            hexrgbs
          }
        }
      }
    }
  }
`;
