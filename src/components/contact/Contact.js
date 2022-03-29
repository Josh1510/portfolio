import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <h4 className="contact__header">Say Hello</h4>
      <div className="contact__container">
        <div className="contact__p-container">
          <p>
            I'm currently looking for a junior or graduate role where I will be able to expand my knowledge around all things software
            engineering - not just web!
          </p>
          <p>If you think you might have a suitable role I'd love to talk, please send me an email or contact me through LinkedIn!</p>
        </div>
        <div className="contact__button-container">
          <div className="contact__button-email">Email</div>
          <div className="contact__button-linkedin">LinkedIn</div>
        </div>
      </div>
    </section>
  );
}
