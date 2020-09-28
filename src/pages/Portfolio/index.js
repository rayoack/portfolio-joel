import React from 'react';

import portfolioDB from './portfolioDB';
// import { Container } from './styles';
import './portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio flex">
      <div className="portfolio-container">
        <h2>Some projects</h2>
        <div className="projects-container grid">
          {portfolioDB.map(project => (
            <a
              className="project-box"
              key={project.title}
              href={project.link}
              >
              <img src={project.background} alt={project.title} />

              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="projects-techs flex">{project.techs}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
