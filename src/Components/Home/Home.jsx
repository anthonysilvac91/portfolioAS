import React from 'react'
import './Home.css'
import Menu from '../Navbar/Menu'

const Home = () => {
  return (
    <div className='hero-container'>
        <h2>Desarrollador de Software</h2>
        <h1>Anthony Silva</h1>
        <h5>Full-Stack</h5>
        <div className='btn-container'> 
            <a className='btn' href="https://linkedin.com/in/anthonysilvac" target='valor_blank'>Linkedin</a>
            <a className='btn' href="https://github.com/anthonysilvac91" target='valor_blank'>Github</a>
        </div>

        <div className='nav-hero'>
          <Menu/>

        </div>
    </div>
  )
}

export default Home