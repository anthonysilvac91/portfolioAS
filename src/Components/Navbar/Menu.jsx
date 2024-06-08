import React from 'react'
import { menuItems } from '../../Utils/menuItems'

import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();
  return (
    <>

{menuItems.map((item, index)=>(

<li>
<Link key={index} to={item.route} >
<h5 className={`menu-item ${location.pathname === item.route ? 'active' : ''}`}> {item.text} </h5>
</Link>
</li>


))}
    
    </>
  )
}

export default Menu