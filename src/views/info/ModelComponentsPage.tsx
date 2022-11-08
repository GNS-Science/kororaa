import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';

const PageContainer = styled('div')({
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '2rem',
});

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '1rem',
});

const ModelComponentsPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Model Components</Typography>
              </TitleContainer>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Please contact us at <a href="mailto:nshm@gns.cri.nz">nshm@gns.cri.nz</a> for OpenQuake input files and instructions on how to run the NSHM. The model is too large to run as a single
                oq-engine job without sub-sampling the logic tree. We are working on tools to make it possible for users to run the complete model and reproduce NSHM results.{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default ModelComponentsPage;
