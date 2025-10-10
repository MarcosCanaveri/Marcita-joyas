import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { CustomContext } from './components/CustomContext'



const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <BrowserRouter>
    <CustomContext>
      <App />
      </CustomContext>
    </BrowserRouter>  
  </StrictMode>,
)