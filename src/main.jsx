import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
