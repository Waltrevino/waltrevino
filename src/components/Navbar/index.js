import React from 'react'
import { CgMenu } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import './style.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='navbar-wrapper'>
      <div id='navbar-container'>
        <div id="login-wrapper">
          <div id='menu'><CgMenu /></div>
          <Link className='login' to='/login'>Login</Link>
        </div>

        <div className='waltrevino-logo-container'>
          <Link id="nav-logo" to="./canvas">{"< W a l t r e v i n o />" }</Link>
        </div>
        
        <div id='search-bar'><BsSearch /></div>
      </div>
    </div>
  )
}

export default Navbar;