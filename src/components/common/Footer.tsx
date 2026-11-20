import React from "react";
import { styled } from "@mui/material/styles";
import { Link, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HAZARD_MODEL } from "../../utils/environmentVariables";
import { CCLicenceIcons, CCLicenceLink } from "./CCLicence";
import { LICENSOR } from "../../constants/licence";

const FooterContainer = styled("footer")(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  borderTop: `5px solid ${theme.palette.navbar.main}`,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
}));

const FooterLinkItems = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: 15,
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid size={{ xs: 2 }}>
          <FooterLinkItems>
            <Link underline="hover" component={RouterLink} color="inherit" to="/TechInfo">
              Technical Info
            </Link>
            <Link underline="hover" component={RouterLink} color="inherit" to="/Contacts">
              Contacts
            </Link>
            <Link underline="hover" component={RouterLink} color="inherit" to="/About">
              About
            </Link>
          </FooterLinkItems>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <FooterLinkItems>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              <em>
                This site provides only seismic hazard results.
                <br />
                Please see &nbsp;
                <Link
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                  href="https://www.building.govt.nz/getting-started/seismic-work-programme/national-seismic-hazard-model"
                >
                  MBIE for information related to engineering design and the NSHM.
                </Link>
                <br />
                You are viewing version {HAZARD_MODEL}.
              </em>
            </Typography>
          </FooterLinkItems>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <FooterLinkItems sx={{ alignItems: "center", textAlign: "center" }} data-testid="footer-licence">
            <CCLicenceIcons />
            <Typography variant="body2">
              The NZ NSHM model and results are &copy; {LICENSOR}, licensed under{" "}
              <CCLicenceLink underline="hover" color="inherit" />.
            </Typography>
          </FooterLinkItems>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
