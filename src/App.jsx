import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import App_Home from './Pages/App/App_Home'
import Charts from './Pages/App/Charts'
import Defi from './Pages/App/Defi'
import Governance from './Pages/App/Governance'
import Pool from './Pages/App/Pool'
import Ekubo from './Pages/App/Ekubo'
import Navbar from './Components/Navbar'
function App() {


  return (
    <div className='w-full font-slussen h-full '>
      <Navbar />
      <Routes className='w-full  h-full' >
        <Route path='/' element={<App_Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/defi-spring' element={<Defi />} />
        <Route path='/governance' element={<Governance />} />
        <Route path='/positions' element={<Pool />} />
        <Route path='/$EKUBO' element={<Ekubo />} />
      </Routes>
    </div>
  )
}

export default App
