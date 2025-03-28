import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { state } from './data.js'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App state={state} />
  </StrictMode>,
)
