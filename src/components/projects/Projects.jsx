import React from 'react';
import './Projects.scss';
import project1 from './../../image/project1.png';

const Projects = () => {
  return (
    <section className='projects section'>
      <h2 className="section-heading">- Recent Projects -</h2>
      <div className="project-cards">
        <div className="project-card">
          <div className="wrapper-left">
            <img src={project1} />
          </div>
          <div className="wrapper-right">
            <h3>DevHub: Social media for devs</h3>
            <p>Features: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
            <p>Tech Stack: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
          </div>
        </div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>
    </section>
  );
}

export default Projects;
