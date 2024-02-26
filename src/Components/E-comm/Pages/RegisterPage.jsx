import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../Assets/logo2_1.png";
import { FaArrowRight } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const exisitngUser = localStorage.getItem("email");

    if (exisitngUser === email) {
      alert(
        "User already exists. Please log in or use a different email address."
      );
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("User Registered Successfully.");
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container login-container2">
        <div className="login-image-container">
          <img src={logo} alt="" />
          <h1>Welcome!</h1>
          <p>Signing up? We're glad to have you here.</p>
        </div>
        <div className="login-form">
          <div className="login-form-inner">
            <h2>Register</h2>

            <br />
            <br />
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="RegisterName">Full Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="John Prasad"
                  id="RegisterName"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="RegisterMail">Email Address</label>
                <input
                  type="email"
                  value={email}
                  placeholder="user@example.com"
                  id="RegisterMail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="RegisterPass">Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Set password"
                  id="RegisterPass"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <button type="submit">
                  Sign Up <FaArrowRight />
                </button>
              </form>
              <br />
              <button
                className="link-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already have an account? <span>Login in.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
