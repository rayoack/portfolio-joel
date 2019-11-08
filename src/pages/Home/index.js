import React from 'react';
import Lottie from 'react-lottie';
// import { Container } from './styles';
import './home.css';

import BoxCode from '../../assets/animations/box-code.json';
import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/linkedin.svg'

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BoxCode,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <section className="home-container grid">
      <div className="greeting-container flex">
        <div>
          <div className="greeting-info">
            <h1 className="greeting-name">Hi, i'm Joel Junior</h1>
            <p className="greeting-description">Fullstack Developer</p>
          </div>

          <div className="medias-links flex">
            <a href="https://github.com/rayoack" className="icon-link">
              <img src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/joel-barbosa-jr/" className="icon-link">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

      </div>

      <div className="animation-container">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
