import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="name-details" data-aos="flip-left">
        designed by{" "}
        <h4 style={{ color: "greenyellow" }}> Abhishek Mukund Kumbhar</h4>
      </div>
      <div className="main-footer-container">
        <div className="left" data-aos="flip-right">
          <div className="home-address">
            <FaHome size={20} style={{ color: "white", marginRight: "3rem" }} />
            <div>
              <h4>A/p Pattankudi, Tal:Chikodi, Dist:belagavi</h4>
              <h4>Karnataka, 591238</h4>
            </div>
          </div>
        </div>
        <div className="right" data-aos="flip-left">
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "3rem" }}
              />
              abhishekkumbar1919@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "3rem" }}
              />
              9886881919
            </h4>
          </div>
        </div>
      </div>
      <div className="name-details" data-aos="fade-up">
        <FaRegCopyright
          size={20}
          style={{ color: "white", marginRight: "1rem" }}
        />
        <b>Abhishek 2022 - {new Date().getFullYear()}</b>
      </div>
    </div>
  );
};

export default Footer;
