import React from "react";

export const Card = ({ contentImg = false, icon, title, description }) => {
  return (
    <div className="d-flex justify-content align-items-center cards">
      <div
        className={`d-flex flex-column cards-content ${
          !contentImg && "without-img"
        }`}
      >
        <i className={`fas ${icon}`}></i>
        <h3 className="text-capitalize">{title}</h3>
        <p>{description}</p>
        <i className="fas fa-arrow-right mt-4"></i>
      </div>
    </div>
  );
};
