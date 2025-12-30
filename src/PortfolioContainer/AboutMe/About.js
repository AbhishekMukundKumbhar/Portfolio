import React from "react";
import "./About.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import config from "../../config/config.json";

const About = () => {
  const mainHead = "About me";
  const subHead = "Why to choose me?";
  return (
    <div id="aboutme" className="about-me" data-aos="fade-up">
      <SectionHeading mainHead={mainHead} subHead={subHead} />
      <div className="about-container">
        <div data-aos="fade-up" className="about-left">
          <div className="about-profile">
            <div className="about-profile-background"></div>
          </div>
        </div>
        <div data-aos="fade-up" className="about-right">
          <div className="about-me-text">{config.summary}</div>
          <div className="about-me-name">-{config.personalDetails.name}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
