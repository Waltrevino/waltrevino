import React from 'react';
import logo from '../i-logo.gif';
import '../App.css';
import {TbAperture} from "react-icons/tb"


function Soccer(){
  return(
    <div id="home-wrapper">
    <header id="home-container">
      <img src={logo} className="soccer-logo" alt="logo" />
      {/* <TbAperture className='App-logo' /> */}
      <p>
        Wanna check out the World Cup?
      </p>
      <a
        className=""
        href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lets go!...
      </a>
    </header>
  </div>
  )
}

export default Soccer;