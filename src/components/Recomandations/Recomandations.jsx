
import React from "react";
import "./Recomandations.css";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import profilePic1 from "../../img/man.png";
import profilePic2 from "../../img/women.png";

const Recomandations = () => {
  const clients = [
    {
      img: profilePic1,

      name: "Dr. Nalin Warnajith",
      title: "Senior Lecturer (Grade II)",
      affiliation: [
        "Software Engineering Teaching Unit,",
        "Faculty Of Science,",
        "University Of Kelaniya."
      ],
      phone: "+9471 757 0140",
      email: "nwarnajith@kln.ac.lk",
    },
    {
      img: profilePic2,
      name: "Dr. Isuru Hewapathirana",
      title: "Senior Lecturer (Grade II)",
      affiliation: [
        "Software Engineering Teaching Unit,",
        "University Of Kelaniya,",
        "Faculty Of Science."
      ],
      phone: "+9477 732 9626",
      email: "hewapathirana@kln.ac.lk",
    },
  ];

  return (
    <div className="t-wrapper" id="recomandations">
      <div className="t-heading">
        <span>Always get </span>
        <span>REFEREE </span>
        <span>for me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}  
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={client.img} alt={`Client ${index + 1}`} style={{ width: '6rem', height: '6rem', borderRadius: '100%' }} />
              <div className="client-info" style={{ marginTop: '10px' }}>
                <span className="client-name" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>{client.name}</span>
                <br></br>
                <span className="client-title" style={{ fontSize: '1rem', margin: '2px 0' }}>{client.title}</span>
                <div className="client-affiliation" style={{ fontSize: '1rem', margin: '2px 0' }}>
                  {client.affiliation.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
                <span className="client-phone" style={{ fontSize: '1rem', margin: '2px 0' }}>{client.phone}</span>
                <br></br>
                <a
                  href={`mailto:${client.email}`}
                  className="client-email"
                  style={{ fontSize: '1rem', margin: '3px 0', textDecoration: 'none' }}
                >
                  {client.email}
                </a>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recomandations;
