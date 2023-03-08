import React from 'react';
import ReactDOM from 'react-dom/client';
import { DashboardPanel, SimulatorPanel } from './components';
import './index.css';

window.onresize = () => {
  console.log('resized');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardPanel />
  </React.StrictMode>
);