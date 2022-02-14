import React from "react";
import "./resume-styles.css";

export const NavbarResume = ({ active, handleSelectNavbarResume }) => {
  return (
    <div className="navbar-resume">
      <div
        className={`education ${active === 1 && "active"}`}
        onClick={() => handleSelectNavbarResume(1)}
      >
        <p className="text-capitalize">educación</p>
      </div>
      <div
        className={`professional-skills ${active === 2 && "active"}`}
        onClick={() => handleSelectNavbarResume(2)}
      >
        <p className="text-capitalize">habilidades profesionales</p>
      </div>
      <div
        className={`experience ${active === 3 && "active"}`}
        onClick={() => handleSelectNavbarResume(3)}
      >
        <p className="text-capitalize">experiencia</p>
      </div>
    </div>
  );
};
