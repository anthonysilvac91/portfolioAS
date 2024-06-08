import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
// import { menuItems } from '../../Utils/menuItems'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu'

const Navbar = () => {
    // const location = useLocation();
    const [menuOpen, setMenuOpen] = useState (false)



      return (
   <nav>
    <div className='logo'>
    <Link to={"/"}><img src={logo} alt="logo" /></Link> 
    </div>
    <div className='navMob'>

    
    <MenuIcon  fontSize="large" onClick={()=>{
        setMenuOpen(!menuOpen)
    }}/>
    </div>
    
    
    <div className='navbar'>
        <ul className={menuOpen ? "open" : ""}>
          
        {/* {menuItems.map((item, index)=>(

                <li>
                <Link key={index} to={item.route} >
                <h5 className={`menu-item ${location.pathname === item.route ? 'active' : ''}`}> {item.text} </h5>
                </Link>
                </li>
              
              
            ))} */}
            <Menu/>
            </ul>
    </div>
    

    
    
    
   </nav>
  )
}

export default Navbar