import React from 'react'
import './styles.css'

const styles = {
  input: {
    // border: "solid red 2px",
    background: "red",
    marginLeft: ".5em"
  },
  label: {
    background: "#e8eaf6",
    // border: "solid red 1px",
    display: "inline-block",
    width: "75px"
  }
};

function Login(props) {
  return (
    <div className='login-wrapper' >
      <div className='login-container'>
        <div>
          <label style={styles.label} for="username">username</label><input style={styles.input} className='' id="username" name="username" type="text" /><br />
          <label style={styles.label} for="password">password</label><input style={styles.input} className='' id="password" name="password" type="text" />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Login;