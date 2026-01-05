import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import resume from "../../../assets/resume/myCV.pdf";
import config from "../../../config/config.json";

const Profile = () => {
  return (
    <div id="myprofile" className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href={config.socialLinks.facebook} target={"_blank"}>
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href={config.socialLinks.instagram} target={"_blank"}>
                <i className="fa fa-instagram"></i>
              </a>
              <a href={config.socialLinks.linkedin} target={"_blank"}>
                <i className="fa fa-linkedin"></i>
              </a>
              <a href={config.socialLinks.github} target={"_blank"}>
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">
                {config.personalDetails.name}
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical loop={Infinity} steps={config.profileSteps} />
              </h1>
              <span className="profile-role-tagline">
                {config.personalDetails.tagLine}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contactme">
              <button className="btn primary-btn">Contact me</button>
            </a>
            <a href={resume} download="Abhishek_Kumbhar_Resume.pdf">
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
