
import React,{ useContext }  from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../context";
import { Link } from "react-scroll";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import { motion } from "framer-motion";
import glassesimoji from "../../img/glassesimoji.png";
import ok from "../../img/ok.png";
import crown from "../../img/crown.png";
import me from "../../img/me.jpg";
import heartImogi from "../../img/heartemoji.png"



const Intro = () => {

    const transition = { duration: 2, type: "spring" };


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">

            <div className="i-name">
                <span  style={{ color: darkMode ? "white" : "" }}>Hi ! I Am</span>
                <span>Vipun Sanjana</span>
                <span>I am udergraduate software engineering students of faculty of science ,<br></br> university of kelaniya.
                  I am thrilled to have been offered a DevOps internship,
                   and I am eager to contribute to the team while gaining valuable hands-on experience in the field....
                </span>

            </div>

            <Link to="contact" spy={true} smooth={true}>
        <button style={{width:"9rem", height:"3rem"}} className="button i-button">Hire me</button>
        </Link>
            

            <div className="i-icons">
                <a href="https://github.com/vipunsanjana">
                <Github color="green" size={"10rem"} />  
                </a>
                <a href="https://inkedin.com/in/vipun">
                <LinkedIn color="green" size={"10rem"} />
                </a>
                <a href="https://www.instagram.com/sanjanavipun?igsh=MXdqY3dkbmpkaXpjNA==">
                <Instagram color="green" size={"10rem"} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100093119705638&mibextid=ZbWKwL">
                <Facebook color="green" size={"10rem"} />
                </a>
                
            </div>

        </div>
        <div className="i-right">
            <img src="" alt="" />
            <img src="" alt=""  />
            <img style={{width:"50%",borderRadius:"1rem",height:"70%"}} src={me} alt=""  />
            <motion.img
          initial={{ left: "85%" , top:"45%"}}
          whileInView={{ left: "90%" }}
          transition={transition}
          src={heartImogi}
          alt=""
        />
       <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="FullStack" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "20rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
        
          <FloatingDiv img={ok} text1="DevOps" text2="Engineer" />
        </motion.div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#C1F5FF", top:"17rem",width:"21rem",height:"11rem",left:"-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro


