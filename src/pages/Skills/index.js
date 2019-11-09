import React from 'react';

import './skills.css';
// import { Container } from './styles';
import AniCoder from '../../components/AniCoder';

export default function Skills() {
  return (
    <section className="skills-container grid">
      <div className="skills-flex-animation flex">
        <AniCoder />
      </div>

      <div className="skills-flex-info flex">
          <h1>Skills</h1>
        <div className="skills-info-container grid">
          <div className="profile-container flex-skill">
            <h3 className="profile">Profile</h3>
            <p className="full-title">Full Stack Developer</p>
          </div>
          
          <div className="skill-title-container flex-skill">
            <h3 className="front-title">Front-end</h3>

            <div className="percent-box">
              <div className="front-percent"></div>
            </div>
          </div>

          <div className="front-tolls flex-skill">
            <h3 className="front-tolls-title">Tolls</h3>
            
            <p className="front-tolls">CSS, Vanilla.js, React.js, Redux, Typescript, React Native</p>
          </div>

          <div className="skill-title-container flex-skill">
            <h3 className="backend-title">Backend</h3>

            <div className="percent-box">
              <div className="back-percent"></div>
            </div>
          </div>

          <div className="back-tolls flex-skill">
            <h3 className="back-tolls-title">Tolls</h3>
            
            <p className="back-tolls">Node.js, Adonis.js, Express.js, MySQL, PostgreSQL, MongoDB</p>
          </div>

          <div className="skill-title-container flex-skill">
            <h3 className="ui-title">UI Design</h3>

            <div className="percent-box">
              <div className="ui-percent"></div>
            </div>
          </div>

          <div className="skills-info-seven flex-skill">
            <h3 className="ui-tolls-title">Tolls</h3>
            
            <p className="ui-tolls">Figma, Adobe PS, AI</p>
          </div>

          <div>

          </div>

        </div>
      </div>
    </section>
  );
}
