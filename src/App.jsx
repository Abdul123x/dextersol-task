import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Cards from './Components/Cards.jsx'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero/>
      <Cards/>
    </div>
  )
}

export default App
