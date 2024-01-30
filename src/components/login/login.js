import React from "react";
import './login.css'
import { Link } from "react-router-dom";

const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};

const Login = () => {
  return (
<>
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
   < Link to="/gestionnaire/users"><a href="#" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a></Link>
    
  </form>
</div>
</>
  );
};

export default Login;