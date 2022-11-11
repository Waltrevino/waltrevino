import React from "react";
// https://www.npmjs.com/package/react-iframe
import Iframe from 'react-iframe'

function Soccer(){
  return (
    <div className="border-red">
      <Iframe id="display-page-container" url="http://www.vivaperros.org" width="100%" position="absolute" styles={{height: "100%"}}/>
    </div>  
  )
}

export default Soccer;