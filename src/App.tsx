import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import NavBar from './components/NavBar';
import theme from './theme';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
