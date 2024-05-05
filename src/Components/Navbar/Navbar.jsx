import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { menuItems } from '../../Utils/menuItems'

const Navbar = () => {
    const location = useLocation();
      return (
   <nav>
    <div className='logo'>
        <img src={logo} alt="logo" />
    </div>
    <div className='navbar'>
        {menuItems.map((item, index)=>(
            <Link key={index} to={item.route} >
                <h5 className={`menu-item ${location.pathname === item.route ? 'active' : ''}`}> {item.text} </h5>
            </Link>
        ))}
    </div>
   </nav>
  )
}

export default Navbar