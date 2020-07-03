import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="container">
          <div className="hello">
            <h1 className="script-heading landing-heading">
              Hello
            </h1>
          </div>
          <div className="personal-details">
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