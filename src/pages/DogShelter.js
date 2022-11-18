import React from "react";
// https://www.npmjs.com/package/react-iframe
import Iframe from 'react-iframe'

function DogShelter() {
  return (

    <div className="page-wrapper">
      <div className="page-container max-height">
        <Iframe className="iframe" url="https://www.tulsaspca.org/" style />
      </div>
    </div>
  )

}

export default DogShelter;