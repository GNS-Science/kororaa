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
import ScienceReportsPage from './views/info/ScienceReportsPage';
import DisaggregationsPage from './views/disaggregations/DisaggregationsPage';
import ContactPage from './views/contact/ContactPage';
import AboutPage from './views/about/AboutPage';
import TechInfoPage from './views/techinfo/TechInfoPage';
import ChangelogPage from './views/changelog/ChangelogPage';
import OtherDocumentsPage from './views/info/OtherDocumentsPage';
import ModelComponentsPage from './views/info/ModelComponentsPage';
import FaultModelPage from './views/faultModel/FaultModelPage';

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
          <BrowserRouter>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <NavBar />
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
                    <Route path="/Disaggs" element={<DisaggregationsPage />} />
                    <Route
                      path="/HazardCurves"
                      element={
                        <React.Suspense>
                          <HazardChartsPage />
                        </React.Suspense>
                      }
                    />
                    <Route path="/Previews" element={<PreviewsPage />} />
                    <Route path="/About" element={<AboutPage />} />
                    <Route path="/TechInfo" element={<TechInfoPage />} />
                    <Route path="/Contacts" element={<ContactPage />} />
                    <Route path="/Releases" element={<ChangelogPage />} />
                    <Route path="/Resources/ScienceReports" element={<ScienceReportsPage />} />
                    <Route path="/Resources/OtherDocuments" element={<OtherDocumentsPage />} />
                    <Route path="/Resources/ModelComponents" element={<ModelComponentsPage />} />
                    <Route path="/Resources/IFMAnalysis" element={<FaultModelPage />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </DisclaimerLayer>
              </Box>
              <Footer />
            </Box>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
