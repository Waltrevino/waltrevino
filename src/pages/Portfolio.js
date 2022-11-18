import React from "react";
import Iframe from "react-iframe";

function Portfolio(){
  return (
    <div className="page-wrapper">
      <div className="page-container max-height">
      <Iframe className="iframe" url="https://waltrevino.github.io/react_portfolio/" />
      </div>
    </div>  
  )  
}

export default Portfolio;