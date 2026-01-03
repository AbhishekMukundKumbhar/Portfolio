import React from "react";
import "./Resume.css";
import { Outlet, Link } from "react-router-dom";
import SideNav from "./SideNavBar/SideNav";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import WorkHistory from "./WorkHistory/WorkHistory";
import Certification from "./Certification/Certification";
import SectionHeading from "../SectionHeading/SectionHeading";

const Resume = () => {
  const mainHead = "Resume";
  const subHead = "My formal bio details";
  return (
    <div id="myResume" className="resume" data-aos="fade-up">
      <SectionHeading mainHead={mainHead} subHead={subHead} />
      <WorkHistory />
      <Achievements />
      <div className="resume-container">
        <div className="resume-side-nav" data-aos="fade-up">
          <SideNav />
        </div>
        <div className="resume-details" data-aos="fade-up">
          {/* <Outlet /> */}
          <Education />
          {/* <Achievements /> */}
          {/* <WorkHistory /> */}
          <Certification />
        </div>
      </div>
    </div>
  );
};
export default Resume;
