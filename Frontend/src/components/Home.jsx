import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>Welcome to <span>ManageMate</span></h1>
            <p>"Empowering HR, Enhancing Performance"</p>
            <button className="hero-btn">Get Started</button>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="home-overview">
          <div className="card">
            <h3>Admin</h3>
             <p>
            <strong>Admin</strong> manages and oversees system-wide functionality.  
            They control user access and permissions, monitor organization-wide analytics and reports, and handle system configuration.  
            In short: <em>"Full control and centralized management for your organization's workforce."</em>
          </p>
          </div>

          <div className="card">
            <h3>HR</h3>
             <p>
            <strong>HR</strong> handles employee onboarding/offboarding, approves leaves, tracks performance, publishes announcements, and manages communications.  
            In short: <em>"Effortless employee handling and HR operations made smarter."</em>
          </p>
          </div>

          <div className="card">
            <h3>Employee</h3>
            <p>
            <strong>Employee</strong> can view profile, attendance, and salary slips.  
            They can apply for leaves, track approval status, receive updates, give/receive feedback, and connect with HR.  
            In short: <em>"A seamless experience for everyday work-life activities."</em>
          </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>
            <strong>ManageMate</strong> simplifies HR processes and enhances
            workforce engagement through modern, intuitive software. Built for
            Admins, HRs, and Employees, our platform streamlines employee
            lifecycle management with real-time solutions.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Us 📬</h2>
          <div className="contact-info">
            <p><b>Email:</b> 📧 support.managemate@gmail.com</p>
            <p><b>Phone:</b> 📞 +91 3567885441</p>
            <p><b>Address:</b> 📍 Odisha, India</p>
            <p><b>Working Hours:</b> ⏰ Mon–Sat, 10:00 AM–6:00 PM</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} ManageMate | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
