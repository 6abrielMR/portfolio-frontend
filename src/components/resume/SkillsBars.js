import React from "react";
import "./resume-styles.css";

export const SkillsBars = ({ data }) => {
  return (
    <div className="content-skill-bars pl-2">
      {data.map((skill) => (
        <div className="bar">
          <div className="info">
            <span>{skill.name}</span>
          </div>
          <div className={`progress-line ${skill.name}`}>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
};
