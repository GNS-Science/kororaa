import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import MenuCard from "./MenuCard";

import { LogoCard } from "../../components/common/PartnersLogos";
import { partnersLogos } from "../../constants/partnersLogos";

const HomePageContainer = styled("div")({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
});

const HomeTitleContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingBottom: "1rem",
});

const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <HomeTitleContainer>
        <Typography variant="h1">
          <em>Te Tauira Matapae Pūmate Rū i Aotearoa • New Zealand National Seismic Hazard Model</em>
        </Typography>
        <Typography variant="h5">
          <em>a GNS Science led research programme</em>
        </Typography>
      </HomeTitleContainer>

      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }} paddingBottom="2rem">
        <MenuCard title="About" text="Background Information." img="/images/GNS-home.png" url="/About" />
        <MenuCard
          title="Curves and Spectra"
          text="Site hazard and UHS plots."
          img="/images/SpectralAccelChart.png"
          url="/Hazardcurves"
        />
        <MenuCard title="Hazard Maps" text="Hazard levels across NZ." img="images/hazard_map.jpeg" url="/HazardMaps" />
        <MenuCard
          title="Rupture Explorer"
          text="Filter and animate ruptures."
          img="/images/rupture_explorer_thumb.png"
          url="/RuptureMap"
        />
        <MenuCard title="Disaggregations" text="Source breakdowns." img="/images/disagg2.png" url="/Disaggs" />
        <MenuCard
          title="Science Reports"
          text="Model reports and datasets."
          img="/info.jpg"
          url="/Resources/ScienceReports"
        />
      </Grid>

      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={12}>
          <LogoCard title="E mahi ana me" text="In collaboration with" logos={partnersLogos} />
        </Grid>
      </Grid>
    </HomePageContainer>
  );
};

export default Home;
