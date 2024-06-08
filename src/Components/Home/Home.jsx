import React from 'react'
import './Home.css'
import Menu from '../Navbar/Menu'

const Home = () => {
  return (
    <div className='hero-container'>
        <h2>Desarrollador de Software</h2>
        <h1>Anthony Silva</h1>
        <h5>Full-Stack Developer</h5>
        <div>
            <button>Linkedin</button>
            <button>GitHub</button>
        </div>

        <div className='nav-hero'>
          <Menu/>

        </div>
    </div>
  )
}

export default Home