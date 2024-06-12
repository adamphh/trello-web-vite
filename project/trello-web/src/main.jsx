import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@emotion/react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <App />
  //   </ThemeProvider>
  // </React.StrictMode>


  // Nếu để React.StrictMode thì khi chạy trên môi trường dev sẽ bị gọi 2 lần: console.log, api cũng bị gọi 2 lần
  // => đơn giản nhất là dùng <>
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
)
