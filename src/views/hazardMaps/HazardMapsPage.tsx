import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

import { HazardMapsPageQuery } from './__generated__/HazardMapsPageQuery.graphql';
import HazardMaps from './HazardMaps';

const HazardMapsPage: React.FC = () => {
  const data = useLazyLoadQuery<HazardMapsPageQuery>(hazardMapsPageQuery, {
    grid_id: 'NZ_0_1_NB_1_0',
    hazard_model_ids: ['SLT_TAG_FINAL'],
    imts: ['SA(0.5)'],
    aggs: ['mean'],
    vs30s: [400],
    poes: [0.02], //0.1 for the middle color strength
  });

  const PageContainer = styled(Box)(({ theme }) => ({
    ...flexProps,
    margin: '0 5% 0 5% 0.5% 0.5%',
    flexDirection: 'column',
    [theme.breakpoints.down('xl')]: {
      margin: '0 2% 0 2% 0.2% 0.2%',
    },
  }));

  const flexProps = {
    display: 'flex',
    justifyConten: 'center',
    alignItems: 'center',
  };

  return (
    <PageContainer>
      <Box role="hazardMapsView" sx={{ width: '100%' }}>
        <div>
          <HazardMaps data={data} />
        </div>
      </Box>
    </PageContainer>
  );
};

export default HazardMapsPage;

export const hazardMapsPageQuery = graphql`
  query HazardMapsPageQuery($grid_id: RegionGrid, $hazard_model_ids: [String], $imts: [String], $aggs: [String], $vs30s: [Float], $poes: [Float]) {
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
