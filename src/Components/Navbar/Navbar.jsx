import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { menuItems } from '../../Utils/menuItems'

const Navbar = () => {
  return (
   <nav>
    <div className='logo'>
        <img src={logo} alt="logo" />
    </div>
    <div className='navbar'>
        {menuItems.map((item, index)=>(
            <Link key={index} to={item.route}>
                <h5 className='menu-item'> {item.text} </h5>
            </Link>
        ))}
    </div>
   </nav>
  )
}

export default Navbar