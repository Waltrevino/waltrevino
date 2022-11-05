import React from 'react';
import logo from '../i-logo.svg';
import '../App.css';
import {TbAperture} from "react-icons/tb"


function Home(){
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <TbAperture className='App-logo' /> */}
      <p>
        Mi Pinche React App
      </p>
      <a
        className="App-link"
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