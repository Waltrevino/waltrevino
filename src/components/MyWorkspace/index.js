import React from "react";
import axios from 'axios'

const name = "waltrevino"

class MyWorkspace extends React.Component {

  state = {
    match: false,
    count: 0
  }



  reverseName = str => {
    return str.split("").reverse().join("");
  }

  HandleYesNo = event => {
    const answer = event.target.attributes.getNamedItem("id").value
    
    const newState = {...this.state}

    if (answer === "si"){
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      newState.count = newState.match ? newState.count + 1 : newState.count

      this.setState(newState)

    }

    console.log(this.state.count)
   this.GetJSON();
  }

  GetJSON = () => {
    axios.get("https://dog.ceo/api/breed/" + "beagle" +
    "/images/random")
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }



  render(){
    return (
      // <div>Site Name Backward IS: {this.reverseName(name)}</div>
      <div style={{height: "100px"}}>
        <button id="no" style={{width: "100px", background: "red", align: "right"}} onClick={this.HandleYesNo}>
          NO
        </button>
        <div style={{width: "100px", backgroundColor: "white", display: "inline", width: "100px", border: "solid white 10px"}}>{ this.state.count}</div>
        <button id="si" style={{width: "100px", background: "red", align: "right"}} onClick={this.HandleYesNo}>
          SI
        </button>

      </div>
    )
  }


}

export default MyWorkspace;