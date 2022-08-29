import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

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
  url: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text, url }: InfoCardProps) => {
  return (
    <Grid item xs={6}>
      <StyledCard>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{text}</Typography>
        </CardContent>
        {/*<CardMedia component="img" height="300px" image={img} />*/}
        <CardActions>
          <Button size="small" component={Link} to={url}>
            More
          </Button>
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
        <InfoCard title="The Logic Tree" text="The Logic tree structure with branches and weghts" url="/Resources/LogicTree" />
        <InfoCard title="NZSHM Model Components " text="The Logic tree, Ground Motion Models, Source models, Inversion Solutions, Rupture sets." url="/Resources/ModelComponents" />
        <InfoCard title="NZSHM Publications" text="Scientific publications for the NZSHM." url="." />
        <InfoCard title="Technical resources" text="Information technology used and produced by the NZHSM project. APis, Code Repositories etc." url="." />
        {/*<InfoCard title="Model Information, Reports, and Input Files" text="More Information" />*/}
      </Grid>
    </PageContainer>
  );
};

export default InfoPage;
