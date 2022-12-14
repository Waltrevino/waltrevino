import React from 'react';
import logo from '../i-logo.gif';
import '../App.css';
import { TbAperture } from "react-icons/tb"


function Soccer() {
  return (
    <div className="page-wrapper" >
      <div className="page-container max-height">
        <div className='page-content no-scroll'>

          <img src={logo} className="soccer-logo" alt="logo" />

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
        </div>
      </div>
    </div>
  )
}

export default Soccer;