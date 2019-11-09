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
        <div className="skills-info">
          <h1>Skills</h1>
        </div>
      </div>
    </section>
  );
}
