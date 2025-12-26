
import InputField from "./components/InputField"
import SocialLogin from "./components/SocialLogin"
import SideBar from "./components/sidebar"

const App = () => {
  return (
    <>
     <SideBar/>
     <div className="ALL">
    
    <div className="login-container">
      <h2 className="form-title">Log in With</h2>
      <SocialLogin />

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
      <InputField type="email" placeholder="Email Address" icon=""/*"mail"*/ />
      <InputField type="password" placeholder="Password" icon="password" />


          <a href="#" className="forgot-passowrd-link">Forgot Password?</a>

          <button className="login-button">Log in</button>
      </form>

      <p className="signup-text">No account? <a href="#">Sign up now</a></p>
    </div>
  </div>
  </>
  )
}

export default App

