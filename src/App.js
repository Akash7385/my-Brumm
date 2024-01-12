import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Services from './components/Services'
function App() {
 
  return (
    <>
     <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="/about" element={<About />}></Route> 
   <Route path="/contact" element={<Contact />}></Route>
   <Route path="/services" element={<Services />}></Route>
   <Route path='/login'  element={<Login/>}></Route>
    </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
