import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';

const ele = document.getElementById('root');

const App = (
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);

ReactDOM.createRoot(ele!).render(App);
