import React from 'react'
import { NavLink } from 'react-router-dom'
import '../SideNavbar/sidenavbar.css'
const SideNabar = () => {
    const menuItems=[
        {name:"Stock",path:"/stock"},
        {name:"Cattle",path:"/cattle"},
        {name:"Production",path:"/production"},
        {name:"Revenue",path:"/revenue"},
        {name:"Staff",path:"/staff"},
        {name:"Machinary",path:"/machinary"}
        
        ]
  return(<div className='navbar-container' >
     {menuItems.map((item)=>(<NavLink to={item.path} key={item.path} className="nav-item" >
          {item.name}
     </NavLink>))}
  </div>)
}

export default SideNabar
