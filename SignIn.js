import React, { useState } from "react";
import "../css/signIn.css";
import loginImage from "../css/assets/images/login/3.jpg";
import logoImage from "../css/assets/images/logo/logo2.png";
import backgroundImage from "../css/assets/images/login/login_bg.jpg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>

      <div
        className="right-container"
        style={{ backgroundImage: { backgroundImage } }}
      >
        <div className="content-wrapper">
          <div className="logo-section">
            <img src={logoImage} alt="Logo" className="company-logo" />
            {/* <span className="logo-text">Community Directory</span> */}
          </div>

          <div className="form-card">
            <div className="card-header">
              <h1 className="card-title">Sign in to account</h1>
              <p className="card-subtitle">
                Enter your email & password to login
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="test@gmail.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="remember-forgot">
                <div className="remember-me">
                  <input type="checkbox" id="remember" className="checkbox" />
                  <label htmlFor="remember">Remember password</label>
                </div>
                <button type="button" className="forgot-link">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="submit-button"
                onClick={handleSubmit}
              >
                Sign in
              </button>

              <div className="create-account">
                Don't have account?{" "}
                <button type="button" className="create-account-link">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;