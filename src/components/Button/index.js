import { render } from "@testing-library/react";
import React from "react";
import './style.css'

function Button(props) {

  return (
    <div className="wrapper">
      <div className="container">
        <button className="content" onClick={() => props.perro()}>I wanna see another Perro</button>
      </div>
    </div>
  )

}

export default Button;