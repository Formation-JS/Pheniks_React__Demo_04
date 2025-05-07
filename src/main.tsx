import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

//! Routing
// - BrowserRouter : Basé sur l'url  http://site/routes/test
// - HashRouter    : Basé une ancre  http://site/#/routes/test (♥ IE)
// - MemoryRouter  : Basé sur runtime JS (Exemple : App avec Electron)
import { BrowserRouter as Router } from 'react-router';

//! ReactDOM
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
