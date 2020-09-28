import React from 'react';
// import { Container } from './styles';
import './home.css';

import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
import Email from '../../assets/icons/email.svg';

import AniSquare from '../../components/AniSquare';

export default function Home() {
  return (
    <section className="home-container grid">
      <div className="greeting-container flex">
        <div>
          <div className="greeting-info">
            <h1 className="greeting-name">Hi, i'm Joel Junior</h1>
            <p className="greeting-description">I'm a full stack developer<br />expert on React.js and Node.js</p>
          </div>

          <div className="medias-links flex">
            <a href="https://github.com/rayoack" className="icon-link">
              <img src={Github} alt="Github" />
            </a>

            <a href="https://www.linkedin.com/in/joel-barbosa-jr/" className="icon-link">
              <img src={Linkedin} alt="Linkedin" />
            </a>
            
            <a href="mailto:joeljunior.dev@gmail.com" className="icon-link">
              <img src={Email} alt="email" />
            </a>
          </div>
        </div>
      </div>
      <AniSquare />
    </section>
  );
}
