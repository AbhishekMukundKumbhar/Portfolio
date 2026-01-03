import config from "../../config/config.json";
import "./Skills.css";

import SectionHeading from "../SectionHeading/SectionHeading";
import { SKILL_ICONS_MAP } from "../../global/constants/global";

const Skills = () => {
  const mainHead = "Skills";
  const subHead = "My programming skills";
  return (
    <div id="mySkills" className="skills" data-aos="fade-up">
      <SectionHeading mainHead={mainHead} subHead={subHead} />
      <div className="skill-details">
        <div className="skills-list">
          {config.skills.map((skill) => {
            return (
              <div className="skill-detail" data-aos="flip-up" key={skill}>
                <div className="card skill-card">
                  <img
                    className="card-img-top skill-logo"
                    src={SKILL_ICONS_MAP[skill]}
                    alt="Card image cap"
                  />
                  <div className="card-footer">
                    <h4 className="card-text skill-name">{skill}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
