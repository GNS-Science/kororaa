import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import { List, ListItem, ListItemButton, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { TypeSpecimen } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const StyledCard = styled(Card)(() => ({
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

const PageContainer = styled('div')({
  // width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  // textMargin: '1rem',
});

// const AboutContainer = styled('div')({
//   // display: 'flex',
//   // flexDirection: 'column',
//   justifyContent: 'left',
//   textAlign: 'left',
//   width: '100%',
//   // padding: '4rem',
// });

// function createData(name: string, lat: number, lon: number) {
//   return { name, lat, lon };
// }

// const rows = [
//   createData('Auckland',-36.87,174.77),
//   createData('Blenheim',-41.51,173.95)
// ]

const TechInfoPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={9}>
          <Typography variant="h2">NZ-NSHM Technical Information</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>
              More detail on many of these concepts can be found in the&nbsp;
              <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                Science Reports
              </Link>
              &nbsp;page.
            </strong>
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Orientation</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">All results are provided in RotD50 orientation.</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Forecast Timespan and Time-Dependence</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            The NZ NSHM 2022 provides forecasts of ground shaking for the next 100 years. Time 100 year time dependence has been included in the model using time since the most recent known event on
            faults (conditional probability of rupture) as well as increased seismicity rates in areas that have recently experienced earthquakes (e.g. Christchurch and Kaikoura). On average, the
            time-dependence has increased the estimate of seismic hazard, though it does decrease it in some areas.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Probability of Exceedance and Return Period</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>Probability of Exceedance:</strong> The chance (or likelihood) that a certain level of ground shaking will be reached or exceeded over a certain time-interval. For example: a PGA
            value of 0.82g for 10% PoE in 50 years states that there are 10% chances that this value of shaking will be reached or exceeded in the next 50 years.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>Return period:</strong> associated with the recurrence interval of earthquakes and defined as the reciprocal of mean annual rates (i.e., number of events per year). Sometimes, In
            terms of hazard results, the reciprocal of annual rates of exceedances is also termed as return period. However, it should be noted that the return period associated with exceedance of a
            certain level of ground shaking does not imply a periodicity in ground shaking exceedance.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            <strong>
              However, it should be noted that the return period associated with exceedance of a certain level of ground shaking does not imply a periodicity in ground shaking exceedance.
            </strong>
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Uncertainty Bounds</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            A key feature of the National Seismic Hazard Model revision is the inclusion of epistemic uncertainty, which is expressed as uncertainty bounds. Uncertainty bounds reflect our confidence
            (i.e. the likelihood) that the true hazard lies within those limits. For example, we estimate there is an 80% chance the true hazard lies within the 80% confidence bounds.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            Logic trees were developed for key SRM and GMCM epistemic uncertainties. These are uncertainties related to our knowledge of earthquake occurrence that we are not directly able to
            constrain by existing data. Weights were assigned to the logic tree branches as a degree of belief based on scientific judgement from experts in the respective fields.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            By modelling the full logic tree, we are able to provide the mean hazard estimate with estimated confidence bounds. The logic tree branches and confidence bounds can be considered to
            explore credible and alternate versions of the next 100 years.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h4">Calculation Grid and Location List</Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">
            The NZ-NSHM has been calculated on a 0.1 deg grid (approximately 11km resolution). In addition, hazard curves and spectra are available for a number of population centres listed under
            “Locations” on the Site Hazard Note that the user must still specify site conditions (Vs30) for these locations as they are not pre-set.
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="body1">The specific coordinates for these locations are:</Typography>
        </Grid>

        <TableContainer>
          <Table sx={{ maxWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell align="right">lat</TableCell>
                <TableCell align="right">lon</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>FooBar</TableCell>
                <TableCell align="right">foo</TableCell>
                <TableCell align="right">bar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </PageContainer>
  );
};

export default TechInfoPage;
