import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import MyHackContextProvider from './context/MyHackContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyHackContextProvider>
      <App />
    </MyHackContextProvider>
  </StrictMode>,
)
