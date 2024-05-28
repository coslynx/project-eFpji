// ProjectCard.js

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.demoLink} target="_blank">Live Demo</a>
      <a href={project.githubLink} target="_blank">GitHub Repository</a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string
  }).isRequired
};

export default ProjectCard;