import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { PauseProvider } from './context/paused';

const beforeContext = <img src="https://i.imgur.com/ihbDmf7.png" alt="before context" width="600" />
const afterContext = <img src="https://i.imgur.com/lFesQRn.png" alt="after context" width="600" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PauseProvider>
    <App />
  </PauseProvider>
);