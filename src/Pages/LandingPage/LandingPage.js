import React, { useState } from 'react'
import '../LandingPage/landingpage.css'
import SideNabar from '../../Components/SideNavbar/SideNabar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const LandingPage = () => {
    const [iseMenuOpen,setMenuOpen]=useState(false);
  return(<div className='landing-page' >
          <FontAwesomeIcon icon={faBars} className='menubar-icon' onClick={()=>setMenuOpen(!iseMenuOpen)}  ></FontAwesomeIcon>
          <div className={`sidebar-container ${iseMenuOpen ? "show-sidebar" :""}`}><SideNabar></SideNabar></div>
          <div className='content-container' ></div>
  </div>)
}

export default LandingPage
