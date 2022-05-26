import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import theme from './theme';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './views/home/Home';
import DisclaimerLayer from './views/home/DisclaimerLayer';
import HazardChartsPage from './views/hazardCharts/HazardChartsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <BrowserRouter>
          <DisclaimerLayer>
            <Routes>
              <Route path="/HazardCurves" element={<HazardChartsPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </DisclaimerLayer>
        </BrowserRouter>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
