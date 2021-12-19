import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { appState, StoreProvider } from './store';


ReactDOM.render(
  <StoreProvider initialValue={appState}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);


