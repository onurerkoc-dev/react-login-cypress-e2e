import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// src/main.jsx dosyasında, React uygulamasını kök DOM elementine render ediyoruz. StrictMode, uygulamanın potansiyel sorunlarını tespit etmeye yardımcı olur.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
