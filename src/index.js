import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { BrowserRouter,HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


