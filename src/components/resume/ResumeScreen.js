import React, { useState } from "react";
import { ResumeSection } from "./ResumeSection";
import { NavbarResume } from "./NavbarResume";
import certifications from "../../data/education.json";
import experiences from "../../data/experience.json";
import skills from "../../data/skills.json";
import "./resume-styles.css";

export const ResumeScreen = () => {
  const [active, setActive] = useState(1);

  const handleSelectNavbarResume = (i) => {
    setActive(i);
  };

  return (
    <div
      id="resume"
      className="w-100 d-flex flex-column align-items-center content-section resume"
    >
      <p id="projects" className="text-uppercase mb-3">
        5 años de experiencia
      </p>
      <h2 className="text-capitalize mb-5">currículo</h2>
      <NavbarResume
        active={active}
        handleSelectNavbarResume={handleSelectNavbarResume}
      />
      {(() => {
        switch (active) {
          case 1:
            return (
              <div>
                <ResumeSection
                  items={certifications}
                  title="titulaciones"
                  subtitle="2007 - 2022"
                />
              </div>
            );
          case 2:
            return (
              <ResumeSection
                items={skills}
                title="habilidades"
                subtitle="desarrollo"
                isSkillsBars={true}
              />
            );
          case 3:
            return (
              <div>
                <ResumeSection
                  items={experiences}
                  title="experiencia laboral"
                  subtitle="Empresas"
                />
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};
