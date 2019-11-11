/* import React, { useState } from 'react';
import Lottie from 'react-lottie';

import './contact.css';

import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
import Email from '../../assets/icons/email.svg';

import LoadAnimation from '../../assets/animations/simple-loading.json';

export default function Contact() {
  const [feedback, setFeedback] = useState('');
  const [senderEmail, setEmail] = useState('');

  const [nameContact, setContactName] = useState('');
  const [isSend, setIsSend] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const deffOptions = {
    title: "loading",
    loop: true,
    autoplay: true,
    animationData: LoadAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  } 

  const {
    REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    REACT_APP_EMAILJS_TEMPLATEID: template,
    REACT_APP_EMAILJS_USERID: user
  } = process.env

  function textChange(event) {
    setFeedback(event.target.value)
  };

  function nameChange(e) {
    setContactName(e.target.value)
  }

  function emailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    
    sendFeedback(
      template,
      senderEmail,
      receiverEmail,
      feedback,
      user,
      nameContact
      )

      function sendFeedback(templateId, senderEmail, receiverEmail, feedback, user, nameContact) {
        window.email.js.send(
          'default_service',
          templateId,
          {
            senderEmail,
            receiverEmail,
            feedback,
            nameContact
          }
        ).then(res => {
          console.log('Email send')
          setIsSend(true)
          setLoading(false)
        })
      }
  }
  

  return (
    <>
      {isSend && (
        <div className="confirmed" onClick={() => setIsSend(false)}>
          <h3>Email successfully sent!</h3>
        </div>
      ) }
      <section className="contact flex">
        <div className="contact-container flex">
          <div className="contact-container-inside">
            <h3>Wanna get in touch or talk about a project?</h3>
            <h4>Feel free to contact me via email</h4>
            <form className="form-contact flex">
              <input onChange={nameChange} value={nameContact} placeholder="Your name" type="text" required className="contact-info" />
              
              <input onChange={emailChange} value={senderEmail} placeholder="Your email" type="text" required className="contact-info" />
            
              <textarea
                id="mailing-text"
                name="mailing-text"
                onChange={textChange}
                placeholder="Tell me what I can do for you."
                required
                value={feedback}
              />
              {isLoading ?
                <Lottie options={deffOptions} width={150} width={150} />
                :
                <input type="button" value="Submit" className="btn-submit" onClick={handleSubmit} />
              }
            </form>
          </div>
        </div>
        <div className="medias-links flex">
              <a href="https://github.com/rayoack" className="icon-link">
                <img src={Github} alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/joel-barbosa-jr/" className="icon-link">
                <img src={Linkedin} alt="Linkedin" />
              </a>

              <a href="http://bit.ly/whatsappdev" className="icon-link">
                <img src={Whatsapp} alt="whatsapp" />
              </a>
              
              <a href="mailto:joeljunior.dev@gmail.com" className="icon-link">
                <img src={Email} alt="email" />
              </a>
            </div>
      </section>
    </>
  );
}
 */