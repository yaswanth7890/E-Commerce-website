import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './stores/context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>,
  </BrowserRouter>
)
