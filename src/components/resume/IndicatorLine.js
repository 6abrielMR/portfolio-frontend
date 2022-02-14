import React, { useState } from "react";
import { Separator } from "../ui/Separator";
import "./resume-styles.css";

export const IndicatorLine = ({ data }) => {
  const [activeCard, setActiveCard] = useState(false);
  const [activeIndicatorLamp, setActiveIndicatorLamp] = useState(false);

  const onHoverCard = () => {
    setActiveIndicatorLamp(true);
    setActiveCard(true);
  };

  const onLeaveCard = () => {
    setActiveIndicatorLamp(false);
    setActiveCard(false);
  };

  const onHoverIndicatorLamp = () => {
    setActiveCard(true);
    setActiveIndicatorLamp(true);
  };

  const onLeaveIndicatorLamp = () => {
    setActiveCard(false);
    setActiveIndicatorLamp(false);
  };

  return (
    <div className="content-items">
      <div className="item-indicators">
        <div className="item-indicator-lamp">
          <div className="indicator-line"></div>
          <div
            className={`indicator-lamp ${
              activeIndicatorLamp
                ? "active-indicator-lamp"
                : "no-active-indicator-lamp"
            }`}
            onMouseOver={onHoverIndicatorLamp}
            onMouseLeave={onLeaveIndicatorLamp}
          ></div>
          <div className="indicator-line"></div>
        </div>
        <div className="item-indicator-line">
          <div className="indicator-line"></div>
        </div>
      </div>
      <div className="item-card">
        <div className="item-card-line">
          <div className="card-line-line">
            <div className="card-line-line-space"></div>
            <div className="card-line-line-line"></div>
            <div className="card-line-line-space"></div>
          </div>
          <div className="card-line-space">
            <div className="indicator-line"></div>
          </div>
        </div>
        <div className="item-card-card">
          <div
            className={`content-card ${
              activeCard ? "active-card" : "no-active-card"
            }`}
            onMouseOver={onHoverCard}
            onMouseLeave={onLeaveCard}
          >
            <h3 className="text-capitalize">{data.title}</h3>
            <span>{data.subtitle}</span>
            <Separator size={"separator-8"} />
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
