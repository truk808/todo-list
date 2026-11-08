import './styles/index.css'
import './styles/reset.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ContextProvider} from "./context/Provider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ContextProvider>
          <App />
      </ContextProvider>
  </StrictMode>,
)
