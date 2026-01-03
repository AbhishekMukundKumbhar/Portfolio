import React, { useEffect, useState } from "react";
import ResumeSubSectionHeading from "../ResumeSubSectionHeading/ResumeSubSectionHeading";
import "./Achievements.css";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";
import Slider from "react-slick";
import config from "../../../config/config.json";

const Achievements = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // IMPORTANT: run on page load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="achievements" className="achievement-content">
      <ResumeSubSectionHeading
        headingText={"Achievements"}
        className="achievement-content-heading"
        Icon={(iconClassName) => <FaTrophy className={iconClassName} />}
      />
      <div className="achievement-container">
        <Slider {...settings}>
          {config.achievements.map((item) => {
            return (
              <div className="card achievement-body" key={item.title}>
                <div className="card-body">
                  <div className="card-head">
                    <div />
                    <h5 className="card-title achievement-title">
                      {item.title}
                    </h5>
                    <a
                      className="external-link"
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <h6 className="card-subtitle mb-3 text-center">
                    {item.subtitle}
                  </h6>
                  <h5 className="card-title achievement-rank">{item.rank}</h5>
                  <p>
                    <u>Description :</u>
                  </p>
                  <p className="card-text achievement-text">{item.text}</p>
                  <p className="card-text text-muted text-center">
                    {item.number}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Achievements;
