import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import OnloadContext from "./OnloadContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OnloadContext>
      <RouterProvider router={routes}>
        <App></App>
      </RouterProvider>
    </OnloadContext>
  </React.StrictMode>,
)
