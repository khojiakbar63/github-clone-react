import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/index.jsx'
import './assets/segoe-font/style.scss'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter}/>
  </StrictMode>,
)
