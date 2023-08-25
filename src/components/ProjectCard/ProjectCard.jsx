import React from 'react';
import {GitHubIcon} from '@mui/icons-material/GitHub';
import {VscGithub} from 'react-icons/vsc';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.img} alt={project.heading} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{project.heading}</h3>
        <p className="card-description">{project.content}</p>
        
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <VscGithub color='black' size={30}/>
        </a>
      </div>
    </div>
    
  );
};

export default ProjectCard;
