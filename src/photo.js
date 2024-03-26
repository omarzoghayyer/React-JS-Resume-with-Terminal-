import React from "react";
import MyImage from "./MyImage";
import professionalPicture from "./Images/oz-pm.PNG";

import "./style/ProfilePictureAndName.css";
import "./style/ProfessionalSummaryStyle.css";

function Photo() {
  return (
    <div className="photo-container">
        {/* Right side for the professional picture */}
        <div className="my-Photo-right-side">
          <div className="rounded-photo">
            <MyImage src={professionalPicture} alt="Professional Picture" />
          </div>
        </div>
    </div>
  );
}

export default Photo;