import './RegisterPage.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import { useNavigate } from "react-router-dom";

function RegisterPage(){
  const navigate2 = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault;
    navigate2("/login")
  }

  return(
        <div className="Page">
          <form>
            <h1>Sign Up</h1>
            <div className="Input-Box">
               <input type="text" placeholder="Email" required />
               <FaUser className="icon" />
            </div>
            <div className="Input-Box">
              <input type="text" placeholder="Password" required />
              <FaUnlock className="icon"/>
            </div>
            <div className="Input-Box">
              <input type="text" placeholder="Confirm Password" required/>
              <FaLock className="icon" />
            </div>
            <div className="Remember-Forgot">
              <label><input type="checkbox"/>Remember Me</label>
              <a target="_blank">Sign up with Google</a>
            </div>
            <button type="submit" onClick={handleRegister}>Register</button>
            <div className="Login-Link">
              <p>Already have an account?<Link to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
  )
}
export default RegisterPage