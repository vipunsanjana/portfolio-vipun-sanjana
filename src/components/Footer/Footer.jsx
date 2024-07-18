import React, { useContext } from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Phone from "@iconscout/react-unicons/icons/uil-phone";
import MapMarker from "@iconscout/react-unicons/icons/uil-map-marker";
import { themeContext } from "../../context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-item">
          <Email color="white" size={"2rem"} />
          <span>vipunsanjana34@gmail.com</span>
        </div>
        <div className="f-item">
          <Phone color="white" size={"2rem"} />
          <span>+94 77 878 0559</span>
        </div>
        <div className="f-item">
          <MapMarker color="white" size={"2rem"} />
          <span>No. 122/3, Kamburugoda, Bandaragama, Sri Lanka.</span>
        </div>
        <div className="f-icons">
          <a href="https://github.com/vipunsanjana">
            <Github color="white" size={"5rem"} />
          </a>
          <a href="https://linkedin.com/in/vipun">
            <LinkedIn color="white" size={"5rem"} />
          </a>
          <a href="https://www.instagram.com/sanjanavipun?igsh=MXdqY3dkbmpkaXpjNA==">
            <Instagram color="white" size={"5rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100093119705638&mibextid=ZbWKwL">
            <Facebook color="white" size={"5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
