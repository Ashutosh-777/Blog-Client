import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { ContextProvider } from "./context/Context";

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);
