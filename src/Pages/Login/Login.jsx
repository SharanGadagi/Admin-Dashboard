import React from 'react'
import './Login.css'

const Login = () => {
  return (
   <>
   <div className="login">
    <div className="loginContainer">
      <div className="loginInput">
     <input type="text" placeholder='Email/UserName' required />
      </div>
      <div className="loginInput">
     <input type="password" placeholder='Password' required />
      </div>
      <button className='login'>LOGIN</button>
    </div>

   </div>
   </>
  )
}

export default Login
