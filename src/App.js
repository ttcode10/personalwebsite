import React from 'react';
import './App.scss';
import Landing from './components/landing/Landing';
import Techstack from './components/techstack/Techstack';
import Capabilities from './components/capabilities/Capabilities';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Landing />
      <Techstack />
      <Projects />
      <Capabilities />
      <Contact />
    </div>
  );
}

export default App;
