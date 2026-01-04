import React, { useEffect, useState } from "react";
import "./Certification.css";
import logo from "../../../assets/logo_jspiders.png";
import ResumeSubSectionHeading from "../ResumeSubSectionHeading/ResumeSubSectionHeading";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import config from '../../../config/config.json';
import { CERTIFICATION_PLATFORM } from "../../../global/constants/global";

const Certification = () => {
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
    <div id="certification" className="content">
      <ResumeSubSectionHeading
        headingText={"Certification"}
        Icon={(iconClassName) => <FaCertificate className={iconClassName} />}
      />
      <div className="certification-container">
             <Slider {...settings}>
               {config.certification.map((item, idx) => {
                 return (
                   <div className="card certification-body" key={item.name}>
                     <div className="card-body">
                       <div className="card-head">
                         <div />
                         <h5 className="card-title certification-title">
                           {item.name}
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
                       <img className="certification-platform" src={CERTIFICATION_PLATFORM[item.platform]} alt={item.name} />
                        <table className="certification-table">
                      <tr>
                        <td>Training type</td>
                        <td>:</td>
                        <td>{item.trainingType}</td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>:</td>
                        <td>{item.completedOn}</td>
                      </tr>
                    </table>
                       <p style={{paddingTop:'1rem'}} className="card-text text-muted text-center">
                         {idx+1}
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
export default Certification;
