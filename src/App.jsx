import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
