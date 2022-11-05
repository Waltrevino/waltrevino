import React from 'react'
import { CgMenu } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import './style.css'



function  Navbar(){
  return(
    <div id ='nav-wrapper'>
      <div id='nav-container'>
        <div id='menu'><CgMenu /></div>
        <div id='logo-container'>
          <div id="nav-logo">w a l t r e v i n o</div>
        </div>
        <div id='search-bar'><BsSearch /></div>
      </div>
    </div>
  )
}

export default Navbar;