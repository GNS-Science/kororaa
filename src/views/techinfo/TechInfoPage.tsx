import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, ListItem, List } from '@mui/material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function createData(name: string, lat: number, lon: number) {
  return { name, lat, lon };
}

const rows = [
  createData('Auckland', -36.87, 174.77),
  createData('Blenheim', -41.51, 173.95),
  createData('Christchurch', -43.53, 172.63),
  createData('Dunedin', -45.87, 170.5),
  createData('Franz Josef', -43.376, 170.188),
  createData('Gisborne', -38.65, 178.0),
  createData('Greymouth', -42.45, 171.21),
  createData('Haast', -43.88, 169.06),
  createData('Hamilton', -37.78, 175.28),
  createData('Hanmer Springs', -42.54, 172.78),
  createData('Hawera', -39.59, 174.28),
  createData('Invercargill', -46.43, 168.36),
  createData('Kaikoura', -42.4, 173.68),
  createData('Kerikeri', -35.22, 173.97),
  createData('Levin', -40.63, 175.28),
  createData('Masterton', -40.96, 175.66),
  createData('Mount Cook', -43.73, 170.1),
  createData('Napier', -39.48, 176.92),
  createData('Nelson', -41.27, 173.28),
  createData('New Plymouth', -39.07, 174.08),
  createData('Otira', -42.78, 171.54),
  createData('Palmerston North', -40.35, 175.62),
  createData('Queenstown', -45.02, 168.69),
  createData('Rotorua', -38.14, 176.25),
  createData('Taupo', -38.68, 176.08),
  createData('Tauranga', -37.69, 176.17),
  createData('Te Anau', -45.41, 167.72),
  createData('Thames', -37.13, 175.53),
  createData('Timaru', -44.4, 171.26),
  createData('Tokoroa', -38.23, 175.87),
  createData('Turangi', -39.0, 175.93),
  createData('Wellington', -41.3, 174.78),
  createData('Westport', -41.75, 171.58),
  createData('Whakatane', -37.98, 177.0),
  createData('Whanganui', -39.93, 175.05),
];

const TechInfoPage: React.FC = () => {
  React.useEffect(() => {
    if (document.location.hash) {
      setTimeout(() => {
        const someAnchor = document.querySelector(document.location.hash);
        if (someAnchor !== null) {
          someAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">NSHM Technical Information</Typography>
                <Typography variant="body1">
                  <strong>
                    More detail on many of these concepts can be found in the&nbsp;
                    <Link underline="hover" component={RouterLink} color="secondary" to="/Resources/ScienceReports">
                      Science Reports
                    </Link>
                    &nbsp;page.
                  </strong>
                </Typography>
              </TitleContainer>
            </Grid>
            <Grid item xs={12}>
              <Typography id="ground-motion-component" variant="h5">
                Ground Motion Component
              </Typography>
              <Typography variant="body1">
                All results are provided in RotD50. The RotD50 is an orientation independent combination of the two horizontal component ground-motions. The two horizontal components are combined for
                a range of rotation angles. Subsequently, at each spectral period, the combined ground-motions are sorted and the 50th percentile is chosen.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="vs30" variant="h5">
                Vs30
              </Typography>
              <Typography variant="body1">
                The NSHM does not include a national Vs30 map and a Vs30 estimate should be obtained for each site. See&nbsp;
                <Link
                  underline="hover"
                  color="secondary"
                  target="_blank"
                  rel="noopener"
                  href="https://www.building.govt.nz/building-code-compliance/b-stability/b1-structure/module-2-geotechnical-investigations/"
                >
                  MBIE for more information.
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="forecast-timespan" variant="h5">
                Forecast Timespan and Time-Dependence
              </Typography>
              <Typography variant="body1">
                The NZ NSHM 2022 provides forecasts of ground shaking for the next 100 years. Time 100 year time dependence has been included in the model using time since the most recent known event
                on faults (conditional probability of rupture) as well as increased seismicity rates in areas that have recently experienced earthquakes (e.g. Christchurch and Kaikoura).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="poe" variant="h5">
                Probability of Exceedance and Return Period
              </Typography>
              <Typography variant="body1">
                <strong>Probability of Exceedance:</strong> The chance (or likelihood) that a certain level of ground shaking will be reached or exceeded over a certain time-interval. For example: a
                PGA value of 0.82g for 10% PoE in 50 years states that there are 10% chances that this value of shaking will be reached or exceeded in the next 50 years.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Return period:</strong> associated with the recurrence interval of earthquakes and defined as the reciprocal of mean annual rates (i.e., number of events per year). Sometimes,
                In terms of hazard results, the reciprocal of annual rates of exceedances is also termed as return period.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>
                  However, it should be noted that the return period associated with exceedance of a certain level of ground shaking does not imply a periodicity in ground shaking exceedance.
                </strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="uncertainty-bounds" variant="h5">
                Uncertainty Bounds
              </Typography>
              <Typography variant="body1">
                A key feature of the National Seismic Hazard Model revision is the inclusion of epistemic uncertainty, which is expressed as uncertainty bounds. Uncertainty bounds reflect our
                confidence (i.e. the likelihood) that the true hazard lies within those limits. For example, we estimate there is an 80% chance the true hazard lies within the 80% confidence bounds.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Logic trees were developed for key SRM and GMCM epistemic uncertainties. These are uncertainties related to our knowledge of earthquake occurrence that we are not directly able to
                constrain by existing data. Weights were assigned to the logic tree branches as a degree of belief based on scientific judgement from experts in the respective fields.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                By modelling the full logic tree, we are able to provide the mean hazard estimate with estimated confidence bounds. The logic tree branches and confidence bounds can be considered to
                explore credible and alternate versions of the next 100 years.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                On the&nbsp;
                <Link underline="hover" component={RouterLink} color="secondary" to="/HazardMaps">
                  Hazard Maps
                </Link>
                &nbsp;page it is possible to select Coefficient of Variation (CoV) as one of the &quot;Statistic&quot; options. The CoV is the standard deviation of the annual probability of
                exceedance divided by the probability chosen (e.g. 10% in 50 years).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="rupture-explorer" variant="h5">
                Rupture Explorer
              </Typography>
              <Typography variant="body1">
                Interrogate and view the ruptures in the inversion fault model (IFM) portion of the seismicity rate model (SRM). The SRM includes both an IFM and a distributed seismicity model (DSM);
                this tool allows you to view the IFM portion of the SRM. The SRM logic tree comprises multiple IFMs; the ruptures shown here include all ruptures from all IFMs in the logic tree. The
                rupture rate given is the weighed mean rate from the various branches of the logic tree.
              </Typography>
              <br />
              <Typography variant="body1">
                Filtering Ruptures:
                <List
                  sx={{
                    listStyleType: 'disc',
                    listStylePosition: 'inside',
                  }}
                >
                  <ListItem sx={{ display: 'list-item' }}>
                    Select a fault system from the list of &quot;Crustal&quot;, &quot;Hikurangi-Kermadec Interface&quot;, and &quot;Puysegur Inteface&quot;.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    The Crustal fault system can be filtered on specific faults to get the subset of ruptures that those faults participate in. Select more than one fault to get all ruptures that any
                    of the faults chosen participate in (the union of all ruptures). Filtering by fault is not possible for the subduction interface fault systems as they comprise only one fault.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Filter on location from a list of population centres. Select a Location and a Radius to get all ruptures that pass within a desired distance of a population centre (distance is
                    calculated in three dimensions). Select multiple locations to get only the ruptures that are near all locations selected (the intersection of all ruptures).
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>Filter on magnitude and rupture rate. Rupture rates are given in powers of 10 per year.</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>After selecting filter options, click &quot;SUBMIT&quot; to display the ruptures that meet the filter criteria.</ListItem>
                </List>
                The ruptures can be viewed one at a time using the animation feature:
                <List
                  sx={{
                    listStyleType: 'disc',
                    listStylePosition: 'inside',
                  }}
                >
                  <ListItem sx={{ display: 'list-item' }}>Each rupture is highlighted in red, one at a time. </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>The play buttons and slider in the lower right can backup, play, advance, and change the rate of the animation.</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>The properties of the highlighted rupture are shown in the upper right.</ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    The sorting of the animation can be controlled with ANIMATION OPTIONS. Weighted mean rate is described above. Maximum and minimum rate are the extrema rates for each rupture taken
                    from all IFMs in the logic tree. After changing the sorting you must click &quot;SUBMIT&quot; again.
                  </ListItem>
                </List>
                The details drawn on the map can be changed using MAP OPTIONS. You can download the map, fault traces, fault surfaces, and MFD data using the download icon
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography id="calculation-grid" variant="h5">
                Calculation Grid and Location List
              </Typography>
              <Typography variant="body1">
                The NZ-NSHM has been calculated on a 0.1 deg grid (approximately 11km resolution). In addition, hazard curves and spectra are available for a number of population centres listed under
                “Locations” on the Site Hazard Note that the user must still specify site conditions (Vs30) for these locations as they are not pre-set.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">The specific coordinates for these locations are:</Typography>
              <TableContainer>
                <Table sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Location</TableCell>
                      <TableCell align="right">lat</TableCell>
                      <TableCell align="right">lon</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.lat}</TableCell>
                        <TableCell align="right">{row.lon}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechInfoPage;
