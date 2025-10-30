import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import SignupImage from "../assets/Sign Up.jpg";

const SignUp = () => {
  const [role, setRole] = useState("HR");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (formData) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Signup failed");
        return { success: false };
      }
      alert("Signup successful!");
      navigate("/login");
      return { success: true };
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again later.");
      return { success: false };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = { name, email, password, role };
    await signup(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-overlay">
        <div className="signup-form-box">
          <h2 className="welcome">Create Account</h2>

          <label className="label">Role:</label>
          <div className="role-buttons">
            {["HR", "Employee"].map((r) => (
              <button
                key={r}
                className={`role-btn ${role === r ? "active" : ""}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <label className="field-label">Full Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="field-label">Email:</label>
          <input
            type="email"
            placeholder="john.doe@example.org"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="field-label">Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label className="field-label">Confirm Password:</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="signup-btn" onClick={handleSubmit}>
            Sign Up
          </button>

          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <button
              type="button"
              className="signup-link"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
