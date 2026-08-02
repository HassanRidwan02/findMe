import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import ReportLost from './pages/ReportLost.jsx'
import ReportFound from './pages/ReportFound.jsx'

import HeroSection from './pages/HeroSection'
import FilterSection from './pages/FilterSection'
import Footer from './pages/Footer'

function App() {

  return (
    <div className="main-container">
      <Navbar />

      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/lost' element={< ReportLost />}/>
        <Route path='/found' element={< ReportFound />}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
