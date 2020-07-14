import React from 'react';
import './Projects.scss';

const Projects = () => {
  return (
    <section className='projects section'>
      <h2 className="section__heading">- Recent Projects -</h2>
      <div className="project__cards">
        <div className="project__card">
          <div className="project__card__container">
            <div className="project__wrapper__left project__wrapper__left-1">
              <div className="project__card__overlay"></div>
            </div>
            <div className="project__wrapper__right">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
            </div>
          </div>
        </div>
        <div className="project__card">
          <div className="project__card__container">
            <div className="project__wrapper__left project__wrapper__left-1">
              <div className="project__card__overlay"></div>
            </div>
            <div className="project__wrapper__right">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
            </div>
          </div>
        </div>
        <div className="project__card">
          <div className="project__card__container">
            <div className="project__wrapper__left project__wrapper__left-1">
              <div className="project__card__overlay"></div>
            </div>
            <div className="project__wrapper__right">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam erat sed dictum mollis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
