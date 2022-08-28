import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { Paper, Typography, Button } from '@mui/material';

const PageContainer = styled('div')({
  width: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
});

const InfoContainer = styled('div')({
  // display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  // padding: '4rem',
});

interface InfoCardProps {
  title: string;
  text: string;
}

const ModelComponent: React.FC<InfoCardProps> = ({ title, text }: InfoCardProps) => {
  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{text}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const ModelComponentsPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={12}>
          <InfoContainer>
            <Typography variant="h2">
              <Link to="/Resources">Resources :: </Link>
              Model Components
            </Typography>
          </InfoContainer>
        </Grid>
        <Grid item xs={12}>
          <InfoContainer>
            <Typography variant="h3">Source Models</Typography>
          </InfoContainer>
        </Grid>
        <ModelComponent title="Source 1" text="The Logic tree, Ground Motion Models, Source models, Inversion Solutions, Rupture sets." />
        <ModelComponent title="Source 2 " text="Scientific publications for the NZSHM." />
        <ModelComponent title="Technical resources" text="Information technology used and produced by the NZHSM project. APis, Code Repositories etc." />
        {/*<InfoCard title="Model Information, Reports, and Input Files" text="More Information" />*/}
      </Grid>
    </PageContainer>
  );
};

export default ModelComponentsPage;
