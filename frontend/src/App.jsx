import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Reciepies from './pages/Reciepies'

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/reciepies" element={<Reciepies />}></Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer></Footer>
  </div>
  )
}

export default App
