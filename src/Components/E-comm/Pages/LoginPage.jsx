import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import "./LoginPage.css";
import logo from "../Assets/logo2_1.png";
import { FaArrowRight } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { setIsloggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (
      email === storedEmail &&
      pass === storedPassword &&
      email !== "" &&
      pass !== ""
    ) {
      sessionStorage.setItem("email", email);
      setIsloggedIn(true);
      console.log("Success");
      navigate("/home");
    } else {
      alert("Enter proper credentials.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-container">
          <img src={logo} alt="" />
          <h1>Welcome!</h1>
          <p>Sign in to continue.</p>
        </div>
        <div className="login-form">
          <div className="login-form-inner">
            <h2>Sign in</h2>
            <br />
            <br />
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="user@example.com"
                  id="email"
                  name="email"
                />
                <br />
                <label htmlFor="pass">Password</label>
                <input
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  placeholder="some password"
                  id="pass"
                  name="pass"
                />
                <br />
                <button type="submit">
                  Continue <FaArrowRight />
                </button>
              </form>
              <br />
              <button
                className="link-btn"
                onClick={() => navigate("/register")}
              >
                Don't have an account? <span>Register here.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
