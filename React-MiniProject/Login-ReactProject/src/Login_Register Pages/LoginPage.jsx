import React from "react";
import './LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
//Note : use npm install react-icons --save for icons
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  }


  return(
    <div className="Page">
      <form>
        <h1>Login</h1>
        <div className="Input-Box">
           <input type="text" placeholder="Email" required />
           <FaUser className="icon" />
        </div>
        <div className="Input-Box">
          <input type="text" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>
        <div className="Remember-Forgot">
          <label><input type="checkbox"/>Remember Me</label>
          <a target="_blank">Forgot Password?</a>
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
        <div className="Register-Link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  )
}
export default LoginPage