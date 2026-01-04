import React from "react";
import ResumeSubSectionHeading from "../ResumeSubSectionHeading/ResumeSubSectionHeading";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";
import config from "../../../config/config.json";

const Education = () => {
  return (
    <div id="education" className="content">
      <ResumeSubSectionHeading
        Icon={(iconClassName) => <FaGraduationCap className={iconClassName} />}
        headingText={"Education"}
      />
      <div className="content-container">
        <div className="education-details">
          <ul>
            {config.education.map((detail) => {
              return (
                <li key={detail.name} className="key-education-detail">
                  <div className="education-detail-section">
                    <div className="clg-title">
                      <h5>{detail.name}</h5>
                    </div>
                    <div className="duration-location">
                      <div>Passed out :{detail.passedOut}</div>
                      <div>{detail.location}</div>
                    </div>
                    <table className="education-table">
                      <tr>
                        <td>{detail.university} </td>
                        <td>:</td>
                        <td>{detail.university_name}</td>
                      </tr>
                      <tr>
                        <td>{detail.CGPA ? detail.CGPA : detail.percentage}</td>
                        <td>:</td>
                        <td>{detail.marks}</td>
                      </tr>
                    </table>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
