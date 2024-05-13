import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <>
       <Navbar/>
       <Home/>
       <Footer/>
      </>
    </div>
  )
}

export default App
