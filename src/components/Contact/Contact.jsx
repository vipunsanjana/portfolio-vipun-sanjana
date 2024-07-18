import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { themeContext } from "../../context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);


  const serviceID = "service_oii8u6d";
  const templateID = "template_mm31z6l";
  const userID = "3VoLOssOTkBwp0sbb";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
      <div className="awesome">
      <span className={`title ${darkMode ? 'dark' : ''}`}>Get in Touch</span>
      <span className="subtitle">Contact me</span>
      <span className={`name ${darkMode ? 'dark' : ''}`}>Vipun Sanjana Jayathunga</span>
      <span className={`degree ${darkMode ? 'dark' : ''}`}>B.Sc (Software Engineering) Hon's (UG)</span>
      <span className={`faculty ${darkMode ? 'dark' : ''}`}>Faculty Of Science, University Of Kelaniya.</span>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user" placeholder="Your Name" />
          <input type="email" name="from_email" className="user" placeholder="Your Email" />
          <textarea name="message" className="user" placeholder="Your Message" />
          <input type="submit" value="Send" className="button" />
          {done && <span style={{fontSize:"2rem"}} className="success-message">Thanks for contacting me!</span>}
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
