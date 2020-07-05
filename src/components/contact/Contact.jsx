import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from "react-tooltip";
import './Contact.scss';
import email from './../../icons/email.svg';
import linkedin from './../../icons/linkedin.svg';
import github from './../../icons/github.svg';

const Contact = () => {
  const [clickboard, setClickboard] = useState({
    value: '',
    copied: false,
    // place: 'top',
    // type: 'dark',
    // effect: 'solid',
    condition: false
  });

  return (
    <section className='contact section'>
      <h1 className='script-heading contact-heading'>Keep in touch</h1>
      <ul className='contact-logos'>
        <li className='contact-logo-item'>
          <ReactTooltip id='email' place='top' type='dark' effect='solid'>Email copied</ReactTooltip>
          <CopyToClipboard text={clickboard.value} onCopy={() => setClickboard({
            value: 'mail2richardpan@gmail.com',
            copied: true,
            condition: true
          })}>
            <a data-tip data-for='email'>
              <img src={email} alt="Email" />
            </a>
          </CopyToClipboard>
          {/* {
            clickboard.condition ? <ReactTooltip id='email' place='top' type='dark' effect='solid'>Email copied</ReactTooltip> : null
          } */}
        </li>
        <li className='contact-logo-item'>
          <a href="https://www.linkedin.com/in/richardpanux/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li className='contact-logo-item'>
          <a href="https://github.com/ttcode10" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
