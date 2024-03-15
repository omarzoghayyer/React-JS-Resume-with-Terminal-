import React from 'react';
import MyImage from './MyImage';
import professionalPicture from './Images/oz.png';
import './style/ProfilePictureAndName.css';
import './style/ProfessionalSummaryStyle.css';

function ProfileInfo() {
  return (
    <div>
      {/* Container for profile information */}
      <div className='profile-info'>
        {/* Left side for your name */}
        <div className='left-side'>
          <h1>Omar Zoghayyer</h1>
          <hr className='horizontal-line' />
          <div className='keywords'>
            <span>Tech Leader / Product Manager / Gamer</span>
          </div>
          <div className='buttons'>
            <button className='hire-button'>Hire Me</button>
            <button
              className='chat-button'
              onClick={() => window.open('sms:4159809396', '_blank')}
            >
              Chat with Me Live
            </button>
          </div>
        </div>
        {/* Right side for the professional picture */}
        <div className='right-side'>
          <MyImage src={professionalPicture} alt='Professional Picture' />
        </div>
      </div>
      {/* Container for professional summary */}
      <div className='professional-summary-container'>
        <div className='professional-summary'>
          <div className='professional-summary-box'>
            <p className='paragraph-box'>Quality Assurance Product Owner for the Tools & automation team, I bring over five years of experience in quality assurance, honed through roles at Electronic Arts and other esteemed organizations. During this time, I've demonstrated strong leadership, deep understanding of QA methodologies, and a track record of delivering full testing plans for technical products effectively. My experience includes prominent projects like Battlefield HD, and Maxis - Sims  where I contributed to ensuring top notch quality standards.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ProfileInfo;
