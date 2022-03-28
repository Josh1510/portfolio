import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="portfolio__about">
      <h1 className="about__small-heading">Hey there, I'm</h1>
      <h2 className="about__large-heading">Josh Moon</h2>
      <h3 className="about__large-heading">I'm learning to build things for the web.</h3>
      <p>
        I'm currently focussed on frontend development with React, but have also had the opportunity to work across Node, Express, Cassandra
        DB and PostgreSQL. I have a passion for learning and am looking forward to opportunities to showcase my knowledge
      </p>
    </div>
  );
}
