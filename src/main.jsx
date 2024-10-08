import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importing the main App component
import './index.css'; // Global styles (if any)

// Rendering the App component to the root element in the HTML
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
