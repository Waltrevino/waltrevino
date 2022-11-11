import React from "react";
import Iframe from "react-iframe";

function Portfolio(){
  return (
    <div className="border-red">
      <Iframe id="display-page-container" url="https://waltrevino.github.io/react_portfolio/" width="100%" position="absolute" styles={{height: "100%"}}/>
    </div>  
  )  
}

export default Portfolio;