import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__dark-overlay">
        <div className="container">
          <div className="hello">
            <h1 className="script__heading landing__heading">
              Hello
            </h1>
          </div>
          <div className="landing__personal-details">
            <h3>I'm Richard Pan</h3>
            <h2>Full Stack Developer</h2>
            <p>React, Node.js, Express, MongoDB, TypeScript, GraphQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Landing;