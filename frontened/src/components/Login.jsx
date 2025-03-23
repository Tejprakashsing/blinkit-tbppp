import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/blinkit-logo.png";
import cart from "../assets/cart.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-signup");
    return () => {
      document.body.classList.remove("login-signup");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
  
      // Log the full response to see the structure
      console.log("Response from server:", response.data);
  
      setMessage(response.data.message);
  
      if (response.status === 200) {
        if (response.data.user) {
          const { isAdmin, email } = response.data.user;
      
          // Store the isAdmin flag and email in localStorage
          localStorage.setItem("isAdmin", isAdmin);
          localStorage.setItem("email", email);
      
          // Redirect the user after successful login
          navigate("/");  // Redirect to the homepage or a protected route
        } else {
          setMessage("User data not found in the response");
        }
      }
      
    } catch (error) {
      console.error("Error during login:", error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };
  
  
  return (
    <div className="login-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search 'egg'" />
        </div>
        <button className="cart-button">
          <img src={cart} alt="cart" />
          My Cart
        </button>
      </header>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button">Login</button>
        </form>
        <p>{message}</p>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;