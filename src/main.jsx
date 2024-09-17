import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShoppingCart } from './ShoppingCart'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ShoppingCart></ShoppingCart>
    </StrictMode>
  </BrowserRouter>,
)
