import googleIcon from "../assets/logos/google.svg"


const SocialLogin = () => {
    return(
        <div className="social-login">
        <button className="social-button">
          <img src={googleIcon} alt="Google" className="social-icon"/>Google
        </button>
      </div>
    )
}

export default SocialLogin