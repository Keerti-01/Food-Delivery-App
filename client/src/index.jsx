import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"

import Store from "./Redux/Store"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
);
