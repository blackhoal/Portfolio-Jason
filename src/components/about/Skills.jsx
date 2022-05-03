import React from "react";
import "./skills.css";

const Skills = () => {
  const frontendSkills = [
    {
      title: "Javascript",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "React JS",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "Redux",
      width: "85%",
      percentage: "85%",
    },
  ];

  const backendSkills = [
    {
      title: "Java",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "Python",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "Spring Boot",
      width: "85%",
      percentage: "85%",
    },
  ];

  const SkillItem = ({ title, percentage }) => {
    return <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
          <h6>{title}</h6>
          <span>{percentage}</span>
        </div>
  
        <div className="skill__bar">
          <span
            className="skill__bar-percentage"
            style={{ width: `${percentage}` }}
          ></span>
        </div>
      </div>
  };

  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="backend__skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="etc"></div>
    </div>
  );
};

export default Skills;
