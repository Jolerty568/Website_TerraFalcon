import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
