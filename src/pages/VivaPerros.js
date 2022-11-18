import React from "react";
// https://www.npmjs.com/package/react-iframe
import Iframe from 'react-iframe'

function VivaPerros(){
  return (
    <div className="page-wrapper">
      <div className="page-container max-height">
      <Iframe className="iframe" url="http://www.vivaperros.org" style  />
      </div>
    </div>  
  )
}

export default VivaPerros; 