import React from 'react';
import './ProjectBox.css';

export default function ProjectBox({ data }) {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../projects/images/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="project__box-container">
      <h5>{data.title}</h5>
      <div className="project__details-container">
        <img src={images[data.image]} alt={`screenshot of ${data.title}`}></img>
        <div className="box__description-container">
          <div className="description__data-container">
            <div className="description__data">{data.description}</div>
          </div>
          <div className="description__button-container">
            <div className="description__button">DEMO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
