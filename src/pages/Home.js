import React from 'react';
import logo from '../i-logo.gif';
import '../App.css';
import {TbAperture} from "react-icons/tb"
import wheel from '../i-logo(wheel).svg'


function Home(){
  return(
    <div id="home-wrapper">
    <header id="home-container">
      {/* <img src={logo} className="home-logo" alt="logo" /> */}
      <img src={wheel} className="home-logo" alt="logo" />
      {/* <TbAperture className='App-logo' /> */}
      <p>
        Mi Pinche React App
      </p>
      <a
        className=""
        href="https://www.becker.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vamos...
      </a>
    </header>
  </div>
  )
}

export default Home;