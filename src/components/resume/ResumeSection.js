import React from "react";
import { IndicatorLine } from "./IndicatorLine";
import { SkillsBars } from "./SkillsBars";
import "./resume-styles.css";
import "animate.css";

export const ResumeSection = ({
  items = [],
  title,
  subtitle,
  isSkillsBars = false,
}) => {
  const rows = !isSkillsBars
    ? items.length % 2 === 0
      ? items.length / 2
      : parseInt(items.length / 2 + 1)
    : (items.length % 2 === 0
        ? items.length / 2
        : parseInt(items.length / 2 + 1)) * 1.8;
  return (
    <div
      className="w-100 content-section-resume-columns animate__animated animate__fadeIn"
      style={{ "--rows": rows }}
    >
      <p className="text-capitalize mb-2">{subtitle}</p>
      <h2 className="text-capitalize">{title}</h2>
      <div className="section">
        {items.map((item, i) =>
          isSkillsBars ? (
            <SkillsBars key={`resume-skills-${i}`} data={item} />
          ) : (
            <IndicatorLine key={`resume-${i}`} data={item} />
          )
        )}
      </div>
    </div>
  );
};
