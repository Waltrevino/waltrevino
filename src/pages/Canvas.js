import React from "react";
import Table from '../components/Table'
import usersss from '../utils/users.json'
import './styles.css'
import API from "../utils/API";
import MyWorkspace from "../components/MyWorkspace";

class Canvas extends React.Component {

  state = {
    count: 0,
    username: "",
    password: "",
    users: []
  }

  componentDidMount() {
    // this.runQuery()
  }

  runQuery = () => {
    API.qryUsers()
      .then(res => console.log(res.data))

    // API.qry()
    //   .then(res => {
    //     // console.log(res)
    //   })
  }

  HandleClick = event => {
    const { name } = event.target;
    console.log(name)

    if (name == "minus") {
      this.setState({ count: this.state.count - 7 })
    } else if (name == "plus") {
      this.setState({ count: this.state.count + 7 })
    }

  }

  HandleChange = event => {
    // const { name, value } = event.target
    const name = event.target.name
    let value = event.target.value

    if (name === "password") {
      value = value.substring(0, 10)
    }

    this.setState({ [name]: value })

  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="page-container max-height">
          <div className="page-content iframe">

            <Table users={this.state.users} />

            <div className="inputOutput">
              <button onClick={this.HandleClick} name="minus"> Down </button>
              <label>{this.state.count}</label>
              <button onClick={this.HandleClick} name="plus"> Up </button>
            </div>

            <form style={{ border: "solid green 2px" }}>
              <label>Username</label>
              <input
                value={this.state.username}
                name="username"
                onChange={this.HandleChange}
                placeholder="username"
              />

              <label>Password</label><input
                name="password"
                value={this.state.password}
                onChange={this.HandleChange}
                placeholder="password"
                type="password"
              />
            </form>

            <div>MY USERNAME IS {this.state.username} AND PASSWORD IS {this.state.password}</div>

            <MyWorkspace />
          </div>
        </div>
      </div>

    )
  }

}

export default Canvas;