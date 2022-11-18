import React from 'react'
import users from '../../utils/users.json'
import './style.css'

class Table extends React.Component {

  state = {
    users: users
  }

  DeleteUser = user => {
    const remaing_users = this.state.users.filter(current_user => current_user.id !== user.id)
    this.setState({ users: remaing_users })
  }

  render() {
    return (
      <div className='table-wrapper'>
        <table className='table-container'>
          <thead >
            <tr>
              <td>name</td>
              <td>email</td>
              <td>phone</td>
              <td>zipcode</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id} onClick={() => this.DeleteUser(user)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.zipcode}</td>
                <td><button style={{ background: "red" }}>Delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;