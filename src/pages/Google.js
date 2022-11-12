import React from "react";
// https://www.npmjs.com/package/react-iframe
import Iframe from 'react-iframe'

function Google(){
  return (
    <div className="border-red">
      <Iframe id="display-page-container" url="https://www.google.com/" width="100%" position="absolute" styles={{height: "100%"}}/>
    </div>  
  )
}

export default Google;