import React from 'react';
import './Projects.css';
import projectsData from '../../projects/projectsData';
import ProjectBox from './ProjectBox';

export default function Projects() {
  return (
    <section id="projects" className="portfolio__projects">
      <h4 className="projects__header">Projects</h4>
      <div className="projects__box-container">
        {projectsData.map((data, key) => {
          return <ProjectBox data={data} key={key} />;
        })}
      </div>
    </section>
  );
}
