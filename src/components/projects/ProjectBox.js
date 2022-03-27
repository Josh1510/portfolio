import React, { useState } from 'react';
import ProjectModal from './modal/ProjectModal';
import './ProjectBox.css';
import WordleApp from '../../projects/wordle/WordleApp';
import gitHubLogo from '../../GitHub-Mark-Light-32px.png';

export default function ProjectBox({ data }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [projectToPass, setProjectTopass] = useState('');

  //  import all images contained in folder
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../projects/images/', false, /\.(png|jpe?g|svg)$/));

  console.log(isModalVisible);

  const handleClick = () => {
    setModalVisible(true);
    setProjectTopass(data.project);
  };

  return (
    <div className="project__box-container">
      <div>
        <h5>{data.title}</h5>
        <div className="project__details-container">
          <img src={images[data.image]} alt={`screenshot of ${data.title}`}></img>
          <div className="box__description-container">
            <div className="description__data-container">
              <div className="description__data">{data.description}</div>
            </div>
            <div className="description__button-container">
              <div className="description__button" onClick={handleClick}>
                DEMO
              </div>
              <a href={`${data.github}`} target="_blank" rel="noreferrer">
                <div className="gitHub-link__content description__button">
                  <img src={gitHubLogo} alt="GitHub Link" />
                  <div Style={'padding-left:7px;'}>GitHub Link</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ProjectModal project={projectToPass} setModalVisible={setModalVisible} />}
    </div>
  );
}
