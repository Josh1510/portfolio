import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="portfolio__about">
      <h1 className="about__small-heading">Hey, I'm</h1>
      <h2 className="about__large-heading">Josh Moon</h2>
      <h3 className="about__large-heading">I'm learning to build things for the web.</h3>
      <p>I'm passionate about learning.</p>
      <p>
        I'm currently focused on front end development with react but have also built some projects using Node.js, Express, Cassandra DB,
        and NoSQL.
      </p>
    </div>
  );
}
