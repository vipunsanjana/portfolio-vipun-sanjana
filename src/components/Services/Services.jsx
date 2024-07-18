import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import devops from "../../img/devops.png";
import web from "../../img/web.png";
import app from "../../img/appdev.png";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Web development, Mobile app development,
          <br />
          DevOps
        </spane>
        <a href={Resume} download>
          <button style={{width:"10rem", height:"5rem"}} className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={devops}
            heading={"DevOps"}
            detail={"Implement and manage containerized applications, automate deployment pipelines, and ensure scalable infrastructure with Docker, Kubernetes, Jenkins, Terraform, and more."}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={web}
            heading={"Full Stack Web Developer"}
            detail={"Develop dynamic web applications using a variety of technologies including HTML, CSS, JavaScript, PHP, MERN(MongoDB, Express, React, Node.js), MEAN(MongoDB, Express, Angular, Node.js), and Spring Boot."}
          />
        </motion.div>

        <motion.div
          initial={{ top: "15rem", left: "25rem" }}
          whileInView={{ left: "20rem", top: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={app}
            heading={"Mobile App Developer"}
            detail={"Craft engaging mobile experiences with Flutter for cross-platform development and Java for native Android app development."}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
