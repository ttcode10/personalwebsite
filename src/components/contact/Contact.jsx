import React from 'react';
import './Contact.scss';
import email from './../../icons/email.svg';
import linkedin from './../../icons/linkedin.svg';
import github from './../../icons/github.svg';


const Contact = () => {
  return (
    <section className='contact section'>
      <h1 className='script-heading contact-heading'>Keep in touch</h1>
      <ul className='contact-logos'>
        <li className='contact-logo-item'><img src={email} alt="Email" /></li>
        <li className='contact-logo-item'><img src={linkedin} alt="LinkedIn" /></li>
        <li className='contact-logo-item'><img src={github} alt="GitHub" /></li>
      </ul>
    </section>
  );
}

export default Contact;
