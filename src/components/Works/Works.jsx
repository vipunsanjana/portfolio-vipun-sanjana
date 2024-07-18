import React, { useContext } from "react";
import "./Works.css";
import mern from "../../img/mean-stack-development-company.png";
import mean from "../../img/mean.png";
import spring from "../../img/spring.png";
import dev from "../../img/dev.png";
import flutt from "../../img/flut.png";
import { themeContext } from "../../context";
import { motion } from "framer-motion";


const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Proficient In
          </span>
          <span>Technologies & Frameworks</span>
          <ul className="skills-list" style={{ color: darkMode ? "white" : "" }}>
            <li>I have experience in developing applications using various modern technologies:</li>
            <li>MERN (MongoDB, Express.js, React.js, Node.js)</li>
            <li>MEAN (MongoDB, Express.js, Angular, Node.js)</li>
            <li>Spring Boot for Java-based applications</li>
            <li>Flutter for mobile app development</li>
            <li>PHP for server-side scripting</li>
            <li>DevOps practices for continuous integration and deployment</li>
            <li>Node Mcu , c++ , arduino and blynk IOT platform</li>
          </ul>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img style={{width:"10rem"}} src={mern} alt="Technology" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"9rem"}} src={flutt} alt="Technology" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"9rem"}} src={dev} alt="Technology" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"9rem"}} src={mean} alt="Technology" />
          </div>
          <div className="w-secCircle">
            <img style={{width:"9rem"}} src={spring} alt="Technology" />
          </div>
        </motion.div>
        
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
