import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from './pages/authentication/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
    {/* <AuthProvider>
    </AuthProvider> */}
  </React.StrictMode>,
)
