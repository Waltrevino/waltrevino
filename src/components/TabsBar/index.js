import React from "react";
import { FaBeer } from 'react-icons/fa';
import './style.css';
import { Link, useLocation } from 'react-router-dom';



function TabsBar(props) {

  const location = useLocation();

  return (
    <div className="tabs-wrapper">
      <div className="container">
        <Link
          className={location.pathname === "/home" ? "active-tab tab tab1" : "tab tab1"} to="/home" onClick={() => props.Activate("home")}>Home
        </Link>
        <Link
          className={props.page === "vivaperros" ? "active-tab tab tab4" : "tab tab2"} to="/vivaperros" onClick={() => props.Activate("vivaperros")}>Viva Perros
        </Link>
        <Link
          className={props.page === "portfolio" ? "active-tab tab tab4" : "tab tab3"} to="/portfolio" onClick={() => props.Activate("portfolio")} >Portfolio
        </Link>
        <Link
          className={props.page === "soccer" ? "active-tab tab tab4" : "tab tab4"} to="/soccer" onClick={() => props.Activate("soccer")}>Soccer
        </Link>
        {/* <Link
          className={props.page === "waltrevino" ? "active-tab tab tab4" : "tab tab4"} onClick={() => props.Activate("waltrevino")} >Waltrevino
        </Link>
        <Link
          className={props.page === "resources" ? "active-tab tab tab4" : "tab tab4"} onClick={() => props.Activate("resources")}>Resources
        </Link> */}
        <Link
          className={props.page === "google" ? "active-tab tab tab4" : "tab tab4"} to="/google" onClick={() => props.Activate("google")}>Google
        </Link>
        <Link
          className={props.page === "shelter" ? "active-tab tab tab4" : "tab tab4"} to="/shelter" onClick={() => props.Activate("shelter")}>Dog Shelters
        </Link>
        <Link
          className={props.page === "games" ? "active-tab tab tab4" : "tab tab4"} to="/games" onClick={() => props.Activate("games")}>Games
        </Link>
        <Link
          className={props.page === "mercado" ? "active-tab tab tab4" : "tab tab4"} to="/mercado" onClick={() => props.Activate("mercado")}>Mercado
        </Link>

      </div>
    </div>
  );
}


export default TabsBar;