import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App