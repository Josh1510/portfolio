import React, { useState } from 'react';
import ProjectModal from './modal/ProjectModal';
import './ProjectBox.css';
import gitHubLogo from '../../GitHub-Mark-Light-32px.png';

export default function ProjectBox({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [projectToPass, setProjectTopass] = useState('');

  const handleClick = () => {
    setModalVisible(true);
    setProjectTopass(data.project);
  };

  return (
    <div className="project__box-container">
      <div>
        <h5>{data.title}</h5>
        <div className="project__details-container">
          <img src={data.image} alt={`screenshot of ${data.title}`}></img>
          <div className="box__description-container">
            <div className="description__data-container">
              <div className="description__data">{data.description}</div>
            </div>
            <div className="description__button-container">
              {data.demo ? (
                <div className="description__button" onClick={handleClick}>
                  Demo
                </div>
              ) : (
                <div className="description__button" onClick={handleClick}>
                  Video
                </div>
              )}
              <a href={`${data.github}`} target="_blank" rel="noreferrer">
                <div className="gitHub-link__content description__button">
                  <img src={gitHubLogo} alt="GitHub Link" />
                  <div Style={'padding-left:7px;'}>GitHub</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ProjectModal project={projectToPass} setModalVisible={setModalVisible} demo={data.demo} video={data.video} />}
    </div>
  );
}
