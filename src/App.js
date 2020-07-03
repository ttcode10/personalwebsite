import React from 'react';
import './App.scss';
import Landing from './components/landing/Landing';
import Techstack from './components/techstack/Techstack';
import Capabilities from './components/capabilities/Capabilities';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Landing />
      <Techstack />
      <Capabilities />
      <Contact />
    </div>
  );
}

export default App;
