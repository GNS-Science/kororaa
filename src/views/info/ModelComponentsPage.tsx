import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { Paper, Typography } from '@mui/material';

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
        <ModelComponent title="Source 1" text="from json." />
        <ModelComponent title="Source 2 " text="from json." />
        {/*<InfoCard title="Model Information, Reports, and Input Files" text="More Information" />*/}
      </Grid>
    </PageContainer>
  );
};

export default ModelComponentsPage;
