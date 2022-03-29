import React from 'react';
import './ProjectModal.css';
import WordleApp from '../../../projects/wordle/WordleApp';

export default function ProjectModal({ project, setModalVisible, demo, video }) {
  console.log(project);

  let ProjectToDemo;

  if (project === 'WordleApp') {
    ProjectToDemo = WordleApp;
  }
  //   if (project === 'Shop') {
  //     ProjectToDemo = <source src={ShopVideo} type="video/mp4" />;
  //   }

  return (
    <>
      <div className="modal__container">
        <div
          className="modal__close"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            height="48"
            width="48"
            focusable="false"
            role="img"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CloseOutline icon</title>
            <g data-name="Layer 2">
              <path
                d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
                data-name="close"
              ></path>
            </g>
          </svg>{' '}
          Close
        </div>
        {demo ? (
          <div className="modal__project-container">{<ProjectToDemo />}</div>
        ) : (
          <div className="modal__project-container">
            <div className="modal__video-container">
              <video loop autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
