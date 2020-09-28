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
            <h3 className="front-tolls-title">Some tools:</h3>
            
            <p className="front-tolls">React.js, React Native, Sass, Styled components</p>
          </div>

          <div className="skill-title-container flex-skill">
            <h3 className="backend-title">Backend</h3>

            <div className="percent-box">
              <div className="back-percent"></div>
            </div>
          </div>

          <div className="back-tolls flex-skill">
            <h3 className="back-tolls-title">Some tools:</h3>
            
            <p className="back-tolls">Node.js, Ruby on Rails, Adonis.js, Express.js, MySQL, PostgreSQL, MongoDB...</p>
          </div>

          <div className="skill-title-container flex-skill">
            <h3 className="cloud-title">Cloud computing(AWS)</h3>

            <div className="percent-box">
              <div className="cloud-percent"></div>
            </div>
          </div>

          <div className="skills-info-seven flex-skill">
            <h3 className="cloud-tolls-title">Some tools:</h3>
            
            <p className="cloud-tolls">EC2, S3 storage, RDS, Route 53, Elastic Beanstalk...</p>
          </div>

          <div>

          </div>

        </div>
      </div>
    </section>
  );
}
