import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Perfil from '../../assets/foto_perfil.jpg'
import './Home.css'
import Menu from '../Navbar/Menu'

const Home = () => {
  return (
    <div className='hero-container'>
      <div className='hero-foto'>
        <img src={Perfil} alt="" />
      </div>
      <div className='desc-container'>
        <h2>Desarrollador Frontend</h2>
        <h1>Anthony Silva</h1>
        <p>Hola, me apasiona diseñar y desarrollar interfaces web intuitivas, modernas y fáciles de usar para todos.</p>
        <div className='btn-container'> 
          <GitHubIcon className='btn-icon' sx={{ fontSize: 50 }} />
          <LinkedInIcon className='btn-icon' sx={{ fontSize: 50 }} />
          <MailOutlineIcon className='btn-icon' sx={{ fontSize: 50 }}/>
        </div>
      </div>
       
{/* 
        <div className='nav-hero'>
          <Menu/>

        </div> */}
    </div>
  )
}

export default Home