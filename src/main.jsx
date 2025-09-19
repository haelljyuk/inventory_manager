import "./index.css"
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')
createRoot(rootElement).render(<App />)
