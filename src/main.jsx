import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
  </StrictMode>,
)
