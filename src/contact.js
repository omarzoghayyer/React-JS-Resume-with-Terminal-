import React from "react";
import "./style/Contact.css"; // Import your CSS file here
import linkedinLogo from "./Images/linkedin-profile.png"; // Import your LinkedIn logo image

function Contact() {
    return (
      <div className="contact-container">
        <h1>Lets Connect</h1>
        <div className="contact-options">
          <a href="https://www.linkedin.com/in/omarjzoghayyer/" target="_blank" rel="noopener noreferrer">
            <button className="linkedin-button">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
              <span>Connect on LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    );
  }
  
  export default Contact;
