import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarouselC.css";

import ui_ux_svg from "../assets/ui-ux.svg";
import web_design_svg from "../assets/web-desgin.svg";
import app_design_svg from "../assets/app-desgin.svg";

function CarouselC() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        draggable={true}
      >
        <div>
          <div className="service-item">
            {/* <span className="service-item-logo logo-count-1">
              <img src={ui_ux_svg} alt="service" />
            </span> */}
            <h4>Scholarship Management System</h4>
            <p>
            This is a project for a database management
system course. This website is dedicated to
assisting students in finding scholarships for
postsecondary education. According to their
academic backgrounds, students might
discover appropriate scholarships. Scholarship
info and student information of all kinds are
stored in the database.
<br></br>
<span style={{ fontWeight: 'bold' }}>Tools</span>
<br></br>
Language:PHP Frontend:Javascript
Database: MySQL

            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            {/* <span className="service-item-logo logo-count-2">
              <img src={web_design_svg} alt="service" />
            </span> */}
            <h4>Skill Tutor</h4>
            <p>
            This website allows users to search for experts
who match their preferred learning styles.
Experts have the option to set up a profile with
their desired salary and skill set. All
transactions are going to be in the database.
<br></br>
<span style={{ fontWeight: 'bold' }}>Tools</span>
<br></br>
Language:PHP, RestAPI Frontend:Javascript
Database: MySQL
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            {/* <span className="service-item-logo logo-count-3">
              <img src={app_design_svg} alt="service" />
            </span> */}
            <h4>Cinemagic</h4>
            <p>
            Online ticket purchasing project involving
Object Oriented Programming.It should include
details like the title of the film, the showtime,
the seat number, and user information.It should
have instructions on how to choose seats,
check for availability, and create an email of
confirmation.To connect to the mail server and
send the confirmation email with the ticket
information to the user's email address, utilize
socket programming.
<br></br>
<span style={{ fontWeight: 'bold' }}>Tools</span>
<br></br>
Language:Java , Library: Java FX
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            {/* <span className="service-item-logo logo-count-2">
              <img src={web_design_svg} alt="service" />
            </span> */}
            <h4>Bike Rental App</h4>
            <p>
            This is a bike rental app where users may
choose from a list of available bikes and send
a request to the renters, who can then choose
any request, and users can check if it is
approved.
<br></br>
<span style={{ fontWeight: 'bold' }}>Tools</span>
<br></br>
Language:React Native , Database: Firebase


            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            {/* <span className="service-item-logo logo-count-2">
              <img src={web_design_svg} alt="service" />
            </span> */}
            <h4>Adventure Game</h4>
            <p>
            You can play a short game on the website
where you can decide how an adventure story
should conclude. There are numerous photo
alternatives available here, and one must
select one and use it with the correct answers
to finish the story. Within the allocated time,
you must finish each level
<br></br>
<span style={{ fontWeight: 'bold' }}>Tools</span>
<br></br>
Language:PHP , Frontend:Javascript
Database: MySQL
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselC;
