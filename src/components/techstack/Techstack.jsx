import React from 'react';
import './Techstack.scss';
import antd from './../../icons/antd.svg';
import aws from './../../icons/aws.svg';
import bootstrap from './../../icons/bootstrap.svg';
import git from './../../icons/git.svg';
import graphql from './../../icons/graphql.svg';
import html5 from './../../icons/html5.svg';
import javascript from './../../icons/javascript.svg';
import jwt from './../../icons/jwt.svg';
import materialui from './../../icons/materialui.svg';
import mongodb from './../../icons/mongodb.svg';
import nodejs from './../../icons/nodejs.svg';
import postman from './../../icons/postman.svg';
import react from './../../icons/react.svg';
import redux from './../../icons/redux.svg';
import sass from './../../icons/sass.svg';
import typescript from './../../icons/typescript.svg';
import webpack from './../../icons/webpack.svg';


const Techstack = () => {
  return (
    <section className='techstack section'>
      <h2 className="section__heading">- Tech Stack -</h2>
      <ul className='techstack__logos'>
        <li className='techstack__logo-item'><img src={react} alt="React" /><br/>React</li>
        <li className='techstack__logo-item'><img src={redux} alt="Redux & Saga" /><br/>Redux & Saga</li>
        <li className='techstack__logo-item'><img src={nodejs} alt="Node.js" /><br/>Node.js</li>
        <li className='techstack__logo-item'><img src={mongodb} alt="MongoDB" /><br/>MongoDB</li>
        <li className='techstack__logo-item'><img src={graphql} alt="GraphQL" /><br/>GraphQL</li>
        <li className='techstack__logo-item'><img src={javascript} alt="JavaScript" /><br/>JavaScript</li>
        <li className='techstack__logo-item'><img src={typescript} alt="TypeScript" /><br/>TypeScript</li>
        <li className='techstack__logo-item'><img src={html5} alt="HTML 5" /><br/>HTML 5</li>
        <li className='techstack__logo-item'><img src={sass} alt="Sass" /><br/>Sass</li>
        <li className='techstack__logo-item'><img src={antd} alt="AntD" /><br/>AntD</li>
        <li className='techstack__logo-item'><img src={bootstrap} alt="Bootstrap" /><br/>Bootstrap</li>
        <li className='techstack__logo-item'><img src={materialui} alt="Material UI" /><br/>Material UI</li>
        <li className='techstack__logo-item'><img src={jwt} alt="JWT" /><br/>JWT</li>
        <li className='techstack__logo-item'><img src={postman} alt="Postman" /><br/>Postman</li>
        <li className='techstack__logo-item'><img src={webpack} alt="Webpack" /><br/>Webpack</li>
        <li className='techstack__logo-item'><img src={git} alt="Git" /><br/>Git</li>
        <li className='techstack__logo-item'><img src={aws} alt="AWS" /><br/>AWS</li>
      </ul>
    </section>
  );
}

export default Techstack;
