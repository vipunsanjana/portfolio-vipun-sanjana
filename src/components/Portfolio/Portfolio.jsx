import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import php from "../../img/php.png";
import Iot from "../../img/CIO_IoT_1.webp";
import todo from "../../img/To-Do-App-With-Flutter-Step-By-Step-Guide-jpg-webp.webp";
import flutter from "../../img/flutter.png";
import Medical from "../../img/medi.webp";
import thumbnail from "../../img/thumbnail.png";
import mern from "../../img/MERN.png";
import chat from "../../img/chat.jpg";
import { themeContext } from "../../context";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      img: Medical,
      name: "Medical Application",
      technology: "MERN Stack (Mongo DB, Express.js, React js, Node.js)",
      github: "https://github.com/vipunsanjana/MERN-stackhighperformance",
      year: "2023",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: flutter,
      name: "Land Sale Mobile App",
      technology: "Flutter (Firebase, Express.js, Node.js)",
      github: "https://github.com/vipunsanjana/LandSalemobileApp",
      year: "2024",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: php,
      name: "E-Commerce web application",
      technology: "PHP, HTML, CSS, JavaScript, MySql",
      github: "https://github.com/vipunsanjana/E-commerce_web_application",
      year: "2023",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: thumbnail,
      name: "Authentication",
      technology: "SpringBoot, Angular js, MySql",
      github: "https://github.com/vipunsanjana/Authentication_SpringbootANDAngularJs",
      year: "2024",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: todo,
      name: "ToDo Mobile App",
      technology: "Flutter & Sql Lite",
      github: "https://github.com/vipunsanjana/flutter_todo_app_sqlite",
      year: "2023",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: Iot,
      name: "IOT project",
      technology: "C++, NodeMCU, Blynk IoT platform",
      github: "MY",
      year: "2024",
      customStyle: { width: "30rem", height: "80%" }
    },
    {
      img: mern,
      name: "Software Architecture Group Project",
      technology: "MERN Stack (Mongo DB, Express.js, React js, Node.js)",
      githubBackend: "https://github.com/vipunsanjana/Software-Archechure-Group-Project-NODE-JS--BACKEND",
      githubFrontend: "https://github.com/vipunsanjana/Software-Archechure-Group-Project-REACT-JS-FRONTEND",
      year: "2024",
      customStyle: { width: "30rem", height: "70%" }
    },
    {
      img: chat,
      name: "Real time chat application",
      technology: "MERN Stack, Sockets.io",
      github: "https://github.com/vipunsanjana/Real-time-chat-application",
      year: "2024",
      customStyle: { width: "30rem", height: "80%" }
    }
  ];
  

  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="portfolio-slider phone"
        style={{marginTop: "0.5rem"}}
      >
        {projects.map((project, index) => (
         <SwiperSlide key={index}>
         <div className="card-port">
           <img  style={project.customStyle} src={project.img} alt={project.name} className="card-img" />
           <div className="card-content">
             <h2 style={{ color: darkMode ? "black" : "" }} className="card-title">{project.name}</h2>
             <p style={{ color: darkMode ? "black" : "" }} className="card-tech">{project.technology}</p>
             {project.github && (
               <a href={project.github} className="card-link" target="_blank" rel="noopener noreferrer">
                 GitHub
               </a>
             )}
             {project.githubBackend && (
               <a href={project.githubBackend} className="card-link" target="_blank" rel="noopener noreferrer">
                 Backend GitHub
               </a>
             )}
             {project.githubFrontend && (
               <a href={project.githubFrontend} className="card-link" target="_blank" rel="noopener noreferrer">
                 Frontend GitHub
               </a>
             )}
           </div>
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;