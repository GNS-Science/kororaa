import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GA_ID } from './utils/environmentVariables';

//uncommnet lines below to start msw for browser
import { worker } from './mocks/browser';

if (process.env.REACT_APP_MSW === 'test') {
  worker.start();
}

if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
