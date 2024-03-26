import React, { useState } from 'react';
import './style/Projects.css';
import battlefieldMobileImage from './Images/battlefield-mobile.png'; 
import battlefield2042 from './Images/battlefield-2042.png';
import sims from './Images/sims.png'; 

const projectsData = [
  { id: 1, title: 'Battlefield Mobile', description: "In my role as Associate Product Owner for Battlefield Mobile, I spearheaded the backend and core technology teams from the QA side. With a focus on ensuring quality and innovation, I played a crucial role in the development of this highly anticipated mobile adaptation of the Battlefield franchise. Collaborating closely with the development team, I prioritized features and refined gameplay mechanics to deliver an immersive and engaging experience tailored for mobile devices. By leading the backend and core technology teams, I ensured that the game's infrastructure and functionality met rigorous quality standards. Battlefield Mobile aims to redefine mobile gaming with its intense multiplayer engagements, diverse maps, and extensive arsenal of weapons, appealing to both seasoned fans and newcomers alike. This project represents Electronic Arts' commitment to delivering captivating FPS combat experiences on the go.", imageUrl: battlefieldMobileImage },
  { id: 2, title: 'Sims', description: "In my role as an Product Owner and Quality Designer for the next installment of The Sims, I'm actively involved in shaping the future of this beloved EA franchise. Leading the charge in quality assurance and product development, I collaborate closely with the development team to prioritize features and refine gameplay mechanics, ensuring that the game meets the high standards expected by our dedicated community of players. With a focus on innovation and immersive gameplay experiences, I work diligently to optimize processes, conduct thorough testing, and implement cutting-edge features that will captivate players in the next iteration of The Sims. This project represents Electronic Arts' commitment to delivering engaging life simulation experiences that resonate with players across the globe.", imageUrl: sims },
  { id: 3, title: 'Battlefield 2042', description: "In my role as Associate Product Owner and Quality Designer for the next generation of Battlefield, known as Battlefield 2042, I led the automation team and contributed significantly to the project's success. I collaborated closely with the development team to prioritize features, ensuring the game met high-quality standards while innovating to exceed player expectations. My responsibilities included refining gameplay mechanics, conducting thorough testing, and optimizing processes for efficiency. By leveraging automation tools and methodologies, we streamlined testing procedures and delivered a polished product on schedule, ultimately delivering an exceptional gaming experience to our players worldwide.", imageUrl: battlefield2042 },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('project-popup')) {
      handleClosePopup();
    }
  };

  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <div key={project.id} className="project">
          <div className="project-content" onClick={() => handleProjectClick(project)}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
      {selectedProject && (
        <div className="project-popup" onClick={handleOverlayClick}>
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>Close</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
