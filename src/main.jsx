import React from 'react'
import ReactDOM from 'react-dom/client'
import Clarity from '@microsoft/clarity'
import App from './App.jsx'
import './index.css'

Clarity.init('xynp2htqnv')
if (localStorage.getItem('cookie-consent') !== 'refused') {
  Clarity.consent()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
