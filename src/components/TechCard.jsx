import React from 'react';

const TechCard = ({ name, icon, description, projects, onClose }) => (
  <div className='tech-card'>
    <button className='close-button' onClick={onClose}>
      Close
    </button>
    <img src={icon} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    {projects && (
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    )}
  </div>
);

export default TechCard; 
