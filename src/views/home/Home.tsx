import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';
import MenuCard, { MenuCardProps } from './MenuCard';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePageContainer = styled('div')({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const HomeTitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

const LogoCard: React.FC<MenuCardProps> = ({ title, text, img, url }: MenuCardProps) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardActionArea component={Link} to={url}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography>{text}</Typography>
          </CardContent>
          <CardMedia component="img" height="225px" image={img} sx={{ objectFit: 'cover' }} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <HomeTitleContainer>
        <Typography variant="h1">Aotearoa New Zealand National Seismic Hazard Model</Typography>
        <Typography variant="h3">Te Tauira Matapae Pumate Ru i Aotearoa</Typography>
        <Typography variant="body1">The NSHM is a collaborative GNS Science led research programme.</Typography>
      </HomeTitleContainer>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <MenuCard title="Hazard Curves" text="Hazard and Spectral acceleration plots." img="/images/SpectralAccelChart.png" url="/Hazardcurves" />
        <MenuCard title="Hazard Maps" text="Showing gridded hazard levels across NZ." img="/images/HazardMapExample.png" url="/HazardMaps" />
        <MenuCard title="Rupture Sets" text="Ruptures and seismic event rates." img="/images/TUI-ruptures-0.png" url="/Previews" />
        <MenuCard title="Science Reports" text="Model information, reports, and datasets." img="/info.jpg" url="/Resources/ScienceReports" />
        <MenuCard title="Disaggregations" text="Disaggregation plots for selected sites." img="/images/disagg.png" url="/Disaggs" />
      </Grid>

      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <LogoCard title="E mahi ana me" text="In collaboration with" img="/images/disagg.png" url="/Collaborators" />
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
