import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginBG from "../assets/LoginBG.jpg"


const Login = () => {
  const [role, setRole] = useState("employee");
  const roles = ["admin", "HR", "employee"];
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setPasswordVisible((vis) => !vis);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    alert(`Welcome ${data.name} (${data.role})!`);
    
  } catch (err) {
    console.error("Login error:", err);
    alert("Network error");
  }
};


  return (
    <div className="login-page">
          {/* <img src={LoginBG} alt="" /> */}
      <div className="login-form-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Log in to access your dashboard</p>

          <div className="role-section">
            <label className="role-label">Login as:</label>
            <div className="role-buttons">
              {roles.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`role-button ${role === r ? "active" : ""}`}
                  onClick={() => setRole(r)}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="john.doe@example.org"
              className="input-field"
              required
            />

            <label>Password:</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="input-field"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="links">
              <a href="#" className="forgot-link">
                Forgot your password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>

            <div className="signup-text">
              Don’t have an account?{" "}
              <button
                type="button"
                className="signup-link"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
