import React from 'react';
import './Capabilities.scss';
import mindset from './../../icons/mindset.png';
import design from './../../icons/design.svg';
import agile from './../../icons/agile.svg';


const Capabilities = () => {
  return (
    <section className='capabilities section'>
      <h2 className="section-heading">- End to End Capabilities -</h2>
      <div className="capability-cards">
        <div className="capability-card card">
          <img src={mindset} alt="Mindset"/>
          <h3>Business-focused mindset</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit porta dapibus. Morbi a placerat elit. Donec fermentum lacinia lacus, porta congue diam suscipit vel. Morbi ornare pulvinar est non dictum. In eu efficitur nisl.</p>
        </div>
        <div className="capability-card card ">
          <img src={design} alt="Design"/>
          <h3>Hands-on UX design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit porta dapibus. Morbi a placerat elit. Donec fermentum lacinia lacus, porta congue diam suscipit vel. Morbi ornare pulvinar est non dictum. In eu efficitur nisl.</p>
        </div>
        <div className="capability-card card">
          <img src={agile} alt="Agile"/>
          <h3>Agile-driven development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit porta dapibus. Morbi a placerat elit. Donec fermentum lacinia lacus, porta congue diam suscipit vel. Morbi ornare pulvinar est non dictum. In eu efficitur nisl.</p>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
