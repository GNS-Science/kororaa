import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Environment, RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import './App.css';
//import theme from './theme';
// import theme from './themeKhaki';
import theme from './themeGulf';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './views/home/Home';
// import InfoPage from './views/info/Info';
import PreviewsPage from './views/preview/PreviewsPage';

import DisclaimerLayer from './views/home/DisclaimerLayer';
import HazardChartsPage from './views/hazardCharts/HazardChartsPage';
import HazardMapsPage from './views/hazardMaps/HazardMapsPage';
// import ModelComponentsPage from './views/info/ModelComponentsPage';
import ScienceReportsPage from './views/info/ScienceReportsPage';

function onRenderCallback(
  id: string, // the "id" prop of the Profiler tree that has just committed
  phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration: number, // time spent rendering the committed update
  baseDuration: number, // estimated time to render the entire subtree without memoization
  // startTime: number, // when React began rendering this update
  // commitTime: number, // when React committed this update
  // interactions: Set // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
  console.log('Profiling ' + id + ' phase: ' + phase + ' actualDur: ' + actualDuration + ' baseDur: ' + baseDuration);
}

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
            <React.Profiler id="Navigation" onRender={onRenderCallback}>
              <NavBar />
            </React.Profiler>
            <BrowserRouter>
              <Box sx={{ flexGrow: 1 }}>
                <DisclaimerLayer>
                  <Routes>
                    <Route
                      path="/HazardMaps"
                      element={
                        <React.Suspense>
                          <HazardMapsPage />
                        </React.Suspense>
                      }
                    />
                    <Route path="/HazardCurves" element={<HazardChartsPage />} />
                    <Route path="/Previews" element={<PreviewsPage />} />
                    <Route path="/Resources/ScienceReports" element={<ScienceReportsPage />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </DisclaimerLayer>
              </Box>
              <Footer />
            </BrowserRouter>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
