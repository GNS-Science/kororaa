import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import { Paper, Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

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

const InfoCard: React.FC<InfoCardProps> = ({ title, text }: InfoCardProps) => {
  return (
    <Grid item xs={6}>
      <StyledCard>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{text}</Typography>
        </CardContent>
        {/*<CardMedia component="img" height="300px" image={img} />*/}
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

const InfoPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid item xs={12}>
        <InfoContainer>
          <Typography variant="h1">Resources</Typography>
          <Typography variant="body1">details deatils</Typography>
        </InfoContainer>
      </Grid>
      <Grid container spacing={6} columns={{ sm: 6, md: 8, lg: 12 }}>
        <InfoCard title="NZSHM Model Components " text="The Logic tree, Ground Motion Models, Source models, Inversion Solutions, Rupture sets." />
        <InfoCard title="NZSHM Publications" text="Scientific publications for the NZSHM." />
        <InfoCard title="Technical resources" text="Information technology used and produced by the NZHSM project. APis, Code Repositories etc." />
        {/*<InfoCard title="Model Information, Reports, and Input Files" text="More Information" />*/}
      </Grid>
    </PageContainer>
  );
};

export default InfoPage;
