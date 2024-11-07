import './styles/main.css'
import './styles/tailwind.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Providers from './providers/Providers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
)
