import React from 'react';
import logo from '../i-logo.gif';
import '../App.css';
import { TbAperture } from "react-icons/tb"
import wheel from '../i-logo(wheel).svg'


function Home() {
  return (

    <div class='page-wrapper'>
      <div className='page-container max-height'>
        <div className='page-content no-scroll'>
          <div className='home-logo-content'>
            {/* <img src={logo} className="home-logo" alt="logo" /> */}
            <img src={wheel} className="home-logo" alt="logo" />
            {/* <TbAperture className='App-logo' /> */}
          </div>
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
        </div>
      </div>
    </div>

    //   <div class='home-wrapper'>

    // </div>

  )
}

export default Home;