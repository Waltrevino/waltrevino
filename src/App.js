// import logo from './i-logo.svg';
import './App.css';
// import MainPage from './pages/main.js';
import Navbar from './components/Navbar';
import TabsBar from './components/TabsBar';
import DISPLAY_PAGE from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Soccer from './pages/Soccer';
import { BsJournalPlus } from 'react-icons/bs';
import DisplayPage from './pages';
import React from 'react';

class App extends React.Component {
  state = {
    currentPage: "/"
  }

  ActivatePage = url => {
    this.setState({ currentPage: url });
  }

  WhoClicked = (event) => {
    const algo = event.target.attributes.getNamedItem("yyy").value
    console.log(algo)
  }

  DisplayHomePage = () => {
    if (this.state.currentPage === "/") {
      return (
        <div>
          <Home />
        </div>
      )
    }
  }

render() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <TabsBar page={this.state.currentPage} Activate={this.ActivatePage}  WhoClicked={this.WhoClicked}/>
      <DISPLAY_PAGE />
    </div>
  )
}
}

export default App;
