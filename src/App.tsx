import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import { Environment, RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import './App.css';
import theme from './theme';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './views/home/Home';
import DisclaimerLayer from './views/home/DisclaimerLayer';
import HazardChartsPage from './views/hazardCharts/HazardChartsPage';
import RuptureSetsPage from './views/ruptureSets/RuptureSetsPage';
import HazardMapsPage from './views/hazardMaps/HazardMapsPage';

// The Home component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function App(props: { environment?: Environment }) {
  const env = props.environment || RelayEnvironment;
  return (
    <RelayEnvironmentProvider environment={env}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <Box sx={{ flexGrow: 1 }}>
              <BrowserRouter>
                <DisclaimerLayer>
                  <Routes>
                    <Route path="/RuptureSets" element={<RuptureSetsPage />} />
                    <Route path="/HazardMaps" element={<HazardMapsPage />} />
                    <Route path="/HazardCurves" element={<HazardChartsPage />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </DisclaimerLayer>
              </BrowserRouter>
            </Box>
            <Footer />
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
