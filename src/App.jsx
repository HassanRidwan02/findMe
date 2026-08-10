import { useState } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Navbar from './HomePage/Navbar.jsx'
import Home from './pages/Home.jsx'
import ReportLost from './pages/ReportLost.jsx'
import ReportFound from './pages/ReportFound.jsx'

import HeroSection from './Homepage/HeroSection'
import FilterSection from './Homepage/FilterSection'
import Footer from './Homepage/Footer'

import ItemDetails from './ItemDetails'

function App() {

  return (
    <div className="main-container">
      <Navbar />

      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/lost' element={< ReportLost />} />
        <Route path='/found' element={< ReportFound />} />

        <Route path='/lost/:id' element={< ItemDetails />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
