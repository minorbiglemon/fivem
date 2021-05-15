import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import { NuiProvider } from 'fivem-nui-react-lib';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <NuiProvider resource="react-fivem">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </NuiProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
