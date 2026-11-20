import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CCLicenceIcons, CCLicenceLink } from "../../components/common/CCLicence";
import { CC_BY_NAME, CITATION, LICENSOR } from "../../constants/licence";

const PageContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  marginBottom: "2rem",
});

const TitleContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingBottom: "1rem",
});

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid size={{ xs: 2 }} />
        <Grid size={{ xs: 8 }}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid size={{ xs: 12 }}>
              <TitleContainer>
                <Typography variant="h2">About The NSHM</Typography>
                <Typography variant="body1">
                  <strong>
                    The National Seismic Hazard Model (NSHM) calculates the likelihood and strength of earthquake
                    shaking that may occur in different parts of Aotearoa New Zealand over specified time periods. The
                    NSHM provides forecasts of ground shaking for the next 100 years.
                  </strong>
                </Typography>
              </TitleContainer>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                Earth Sciences New Zealand is the custodian of the{" "}
                <strong>Aotearoa New Zealand National Seismic Hazard Model</strong>, also known as{" "}
                <strong>Te Tauira Matapae Pūmate Rū i Aotearoa.</strong>
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                This web site provides scientists and researchers with access to the NSHM results and data. For
                background information and educational material please visit the&nbsp;
                <Link
                  color="secondary"
                  target="_blank"
                  rel="noopener"
                  href="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/"
                >
                  NSHM information page
                </Link>
                .
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                Details on model development and implementation can be found in the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                  Science Reports
                </Link>
                &nbsp;page.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="body1">
                Planned features for the site can be found in the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/Previews">
                  Coming Features
                </Link>
                &nbsp;page.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} data-testid="about-licence">
              <Typography variant="h4" sx={{ mt: 2 }}>
                Licence
              </Typography>
              <Typography variant="body1">
                <CCLicenceIcons /> The NZ NSHM model and results are &copy; {LICENSOR} and are released under the{" "}
                <CCLicenceLink color="secondary">{CC_BY_NAME} licence (CC BY 4.0)</CCLicenceLink>. You are free to share
                (copy and redistribute) and adapt (remix, transform and build upon) the model and results for any
                purpose, including commercially, provided you give appropriate credit to {LICENSOR}, provide a link to
                the licence, and indicate if changes were made.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Please cite the NSHM as:
              </Typography>
              <Typography variant="body1" component="blockquote" sx={{ ml: 2, pl: 2 }} data-testid="about-citation">
                {CITATION.authors} ({CITATION.year}). {CITATION.title}. <em>{CITATION.journal}</em>, {CITATION.volume}(
                {CITATION.issue}), {CITATION.pages}.{" "}
                <Link color="secondary" target="_blank" rel="noopener" href={`https://doi.org/${CITATION.doi}`}>
                  https://doi.org/{CITATION.doi}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 2 }} />
      </Grid>
    </PageContainer>
  );
};

export default AboutPage;
