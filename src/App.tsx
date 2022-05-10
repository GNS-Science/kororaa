import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LocalStorageContext from './contexts/localStorage';
import DisclaimerLayer from './components/DisclaimerLayer';

function App() {
  const LocalStorageProvider = LocalStorageContext.Provider;
  const [disclaimerVersion, setDisclaimerVersion] = useLocalStorage<string>('disclaimer-version', '');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <DisclaimerLayer>
          <BrowserRouter>
            <LocalStorageProvider value={{ disclaimerVersion, setDisclaimerVersion }}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </LocalStorageProvider>
          </BrowserRouter>
        </DisclaimerLayer>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
