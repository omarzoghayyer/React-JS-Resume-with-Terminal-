import React from "react";
import linkedinLogo from "./Images/linkedin-logo.png";
import githubLogo from "./Images/github-logo.png";
import emailLogo from "./Images/email-logo.png";
import xLogo from "./Images/x-logo.png";


import "./style/ProfilePictureAndName.css";
import "./style/ProfessionalSummaryStyle.css";

function ProfileInfo() {
  return (
    <div>
      {/* Container for profile information */}
      <div className="profile-info">
        {/* Left side for your name */}
        <div className="left-side">
          <h1>OMAR ZOGHAYYER</h1>
          <hr className="horizontal-line" />
          <div className="keywords">
            <span>
              Product Management & Strategy - Team Building - Tech & Analytics -
              Quality Design{" "}
            </span>
          </div>
          <div className="buttons">
            <a href="https://www.linkedin.com/">
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
            <a href="mailto:sfzoghayyer@gmail.com" className="email-link">
              <img src={emailLogo} alt="Email" className="social-logo" />
            </a>
            <a href="https://github.com/">
              <img src={githubLogo} alt="GitHub" className="social-logo" />
            </a>
            <a href="https://x.com/">
              <img src={xLogo} alt="x" className="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
