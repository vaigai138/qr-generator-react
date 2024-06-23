import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Qrcode } from './QrGenerator'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Qrcode/>
  </React.StrictMode>,
)
