import React, { useEffect, useState } from "react";
import "./Projects.css";
import { FaGithub, FaEye } from "react-icons/fa";
import SectionHeading from "../SectionHeading/SectionHeading";
import Slider from "react-slick";
import config from "../../config/config.json";
import { PERSONAL_PROJECTS_THUMBNAIL } from "../../global/constants/global";

const Projects = () => {
  const mainHead = "Projects";
  const [slidesToShow, setSlidesToShow] = useState(2);

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
        setSlidesToShow(2);
      }
    };

    handleResize(); // IMPORTANT: run on page load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="myProjects" className="projects" data-aos="fade-up">
      <SectionHeading mainHead={mainHead} />
      <div className="projects-content">
        <div className="project">
          <Slider {...settings}>
            {config.personalProjects.map((item) => {
              return (
                <div
                  className="project-detail"
                  data-aos="zoom-in"
                  key={item.name}
                >
                  <img
                    className="project-img"
                    src={PERSONAL_PROJECTS_THUMBNAIL[item.img]}
                    alt="no Internet"
                  />
                  <div className="project-info">
                    <h1>{item.name}</h1>
                    <p className="project-desc">{item.desc}</p>
                    <div className="project-btns">
                      <a
                        href={item.previewLink}
                        className="btn"
                        target={"_blank"}
                      >
                        <FaEye className="project-icon" size={35} />
                        Preview
                      </a>
                      <a href={item.gitLink} className="btn" target={"_blank"}>
                        <FaGithub className="project-icon" size={35} />
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
