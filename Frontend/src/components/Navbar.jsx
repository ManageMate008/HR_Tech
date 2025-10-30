import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-modern ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => navigate("/")}>
        <span className="logo-highlight">Manage</span>Mate
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <button style={{height:"40px" ,width:"160px",marginTop:"10px"}}className="nav-btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={{height:"40px" ,width:"160px"}}className="nav-btn signup-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
