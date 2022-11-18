import React from "react";
import Home from "./Home.js";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Soccer from "./Soccer.js";
import VivaPerros from "./VivaPerros.js";
import Login from "../components/Login";
import Iframe from "react-iframe";
import { CgLogIn } from "react-icons/cg";
import Canvas from "./Canvas.js";
import Portfolio from "./Portfolio.js";
import Navbar from "../components/Navbar/index.js";
import TabsBar from "../components/TabsBar/index.js";
import '../App.css'
import DogShelter from "./DogShelter.js";
import Google from "./Google.js";
import Games from "./Games.js";

class DisplayPage extends React.Component {

  render() {
    return (
      <div className="display-page-wrapper">
        <div className="display-page-container" >
          {/* <TabsBar page={this.state.currentPage} Activate={this.ActivatePage}  WhoClicked={this.WhoClicked}/> */}
          {/* {this.DisplayHomePage} */}
          <Routes>
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vivaperros" element={<VivaPerros />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="Login/google" element={<Google />} />
            <Route path="/shelter" element={<DogShelter />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default DisplayPage;