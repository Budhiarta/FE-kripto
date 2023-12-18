import React from 'react';
import '../css/style.css'

function Login() {
  return (
    <div className="container">
      <div className='cover'>
        <h1 className='greet'>Welcome</h1>
        <text className='log-clue'>Enter your username and password to sign in</text>
        <label className='tag-username'>Username</label>
        <input type="text" className='username-log' placeholder='Username'/>
        <label className='tag-pass'>Password</label>
        <input type="password" className='encrypt-key' placeholder='password'/>
        <button className="encrypt-btn" onClick="">Login</button>
      </div>
    </div>
  );
}

export default Login;