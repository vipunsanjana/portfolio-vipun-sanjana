import React, { useContext } from "react";
import { themeContext } from "../../context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        
        <div className="circle" style={{color: darkMode?'var(--greenCard)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--greenCard)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--greenCard)':''}}>50+</div>
        <span  style={{color: darkMode?'white':''}}>github </span>
        <span>projects</span>
      </div>
    </div>
  );
};

export default Experience;
