import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import theme from './theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DisclaimerLayer from './components/DisclaimerLayer';
import HazardChartsView from './pages/HazardChartsView';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <BrowserRouter>
          <DisclaimerLayer>
            <Routes>
              <Route path="/HazardCurves" element={<HazardChartsView />} />
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
