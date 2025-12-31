import React from "react";
import ResumeSubSectionHeading from "../ResumeSubSectionHeading/ResumeSubSectionHeading";
import "./WorkHistory.css";
import config from "../../../config/config.json";
import { FaHistory } from "react-icons/fa";

const WorkHistory = () => {
  return (
    <div id="workhistory" className="work-content">
      <ResumeSubSectionHeading
        headingText={"Work history"}
        className="work-content-heading"
        Icon={(iconClassName) => <FaHistory className={iconClassName} />}
      />
      <div className="experience-content">
        <div className="key-result-area">
          <div>
            <ul>
              {config.experience?.map((detail) => {
                return (
                  <li className="key-result-details">
                    <div className="key-result-section">
                      <div className="role-title">
                        <h5>{detail.role}</h5>
                      </div>
                      <h6 className="company-name">{detail.companyName}</h6>
                      <div className="duration-location">
                        <div>
                          {detail.startDate} - {detail.endDate}
                        </div>
                        <div>{detail.location}</div>
                      </div>
                      <div className="domain-desc">
                        <ul style={{ listStyleType: "initial" }}>
                          {detail.keyResponsibilities.map((responsibility) => {
                            return <li>{responsibility}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkHistory;
