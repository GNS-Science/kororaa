import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import theme from './theme';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './views/home/Home';
import DisclaimerLayer from './views/home/DisclaimerLayer';
import HazardChartsPage from './views/hazardCharts/HazardChartsPage';
import RuptureSetsPage from './views/ruptureSets/RuptureSetsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <Box sx={{ flexGrow: 1 }}>
            <BrowserRouter>
              <DisclaimerLayer>
                <Routes>
                  <Route path="/HazardCurves" element={<HazardChartsPage />} />
                  <Route path="/RuptureSets" element={<RuptureSetsPage />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </DisclaimerLayer>
            </BrowserRouter>
          </Box>
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
