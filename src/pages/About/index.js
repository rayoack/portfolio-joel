import React from 'react';

// import { Container } from './styles';
import './about.css'

import ProfilePhoto from '../../assets/icons/Photo.png';

export default function About() {
  return (
    <section className="about-container grid">
      <div className="about-photo flex">
        <img src={ProfilePhoto} alt="Joel" />
      </div>

      <div className="about-info flex">
        <div>
          <h2 className="about-info-title">About</h2>
          <p className="about-info-description">
          Hi, my name is Joel Barbosa Junior, I'm 25 years old, I live in a small city of Rio de Janeiro and I'm passionate about web development, machine learning and games.
          </p>
          <p className="about-info-description">
          I have advanced knowledge in React Js and Node Js and frameworks linked to them like Redux, styled components, React Native, Express, Adonis JS and others.
          </p>
          <p className="about-info-techs-label">
          Minhas especialidades:
          </p>
          <ul className="about-info-techs-list">
            <li>Strong experience with React Native and ReactJS</li>
            <li>React workflows (Flux / Redux)</li>
            <li>Stylization of React Components (Styled Components)</li>
            <li>Backend Development (Node JS)</li>
            <li>Strong Jest, Configuration, and Deployment Capability</li>
          </ul>
          <p className="about-info-techs-bootom-label">
          Also, I am always looking to learn new things, you can call me and I will be happy to help.
          </p>
          <p className="about-info-contacts">joeljunior.dev@gmail.com | (21) 96881-6867</p>
        </div>
      </div>
    </section>
  );
}
