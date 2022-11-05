import React from "react";
import { FaBeer } from 'react-icons/fa';
import './style.css'

function TabsBar(){
  return(
    <div className="wrapper">
      <div className="container">
        <div className="tab tab1">
          {/* <FaBeer /> */}
          <div className="tab tab0">Home</div>
        </div>
        {/* <div className="tab tab2 outline-double outline-3 outline-offset-2 text-3xl font-bold double">Viva Perros</div> */}
        <div className="tab tab2" >Viva Perros</div>
        <div className="tab tab3">Portfolio</div>
        <div className="tab tab4">Waltrevino</div>
        <div className="tab tab4">Resources</div>
        <div className="tab tab4">Google</div>
        <div className="tab tab4">Dog Shelters</div>
      </div>
    </div>
  )
}

export default TabsBar;