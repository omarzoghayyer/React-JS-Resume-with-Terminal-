import React, { useState } from 'react';
import './style/Projects.css';

const projectsData = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', imageUrl: 'https://via.placeholder.com/300.png' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', imageUrl: 'https://via.placeholder.com/400.png' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3', imageUrl: 'https://via.placeholder.com/500.png' },
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
