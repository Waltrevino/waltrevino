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

class DisplayPage extends React.Component {

  // state = {
  //   currentPage: "/"
  // }

  // ActivatePage = url => {
  //   this.setState({ currentPage: url });
  // }

  // WhoClicked = (event) => {
  //   const algo = event.target.attributes.getNamedItem("yyy").value
  //   console.log(algo)
  // }

  // DisplayHomePage = () => {
  //   if (this.state.currentPage === "/") {
  //     return (
  //       <div>
  //         <Home />
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
      <div style={{height: "100%"}} className="app-container">
        
        {/* <TabsBar page={this.state.currentPage} Activate={this.ActivatePage}  WhoClicked={this.WhoClicked}/> */}
        {/* {this.DisplayHomePage} */}
        <Routes>
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vivaperros" element={<VivaPerros />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    )
  }
}

export default DisplayPage;