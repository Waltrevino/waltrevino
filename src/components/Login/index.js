import React from 'react'
import './styles.css'

function Login(props) {
  return (
    <div className='login-wrapper' >
      <div className='login-container'>
        <div>
          <div>
          <label for="username" className=''>username</label><input className='input' id="username" name="username" type="text" placeholder='Enter your username and'/>
          </div>
          
          <div>
          <label for="password" className='label'>password</label><input className='input' id="password" name="password" type="password" placeholder='Password'/>
          </div>
          <div>
          <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;