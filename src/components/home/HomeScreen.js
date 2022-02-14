import React from "react";
import { Button } from "../ui/Button";
import "./home-styles.css";

export const HomeScreen = () => {
  const classNameTopLayer =
    "w-100 h-100 position-absolute top-0 left-0 right-0 m-0 d-flex flex-column justify-content-center align-items-center top-layer";
  return (
    <div id="home" className="w-100 h-100 position-relative home">
      <div className={classNameTopLayer}>
        <div className="d-flex justify-content-center align-items-center">
          <h1 data-text="Gabriel Rodriguez">Gabriel Rodriguez</h1>
        </div>
        <p className="pt-4 pb-5">
          Soy un <span>Desarrollador</span>
        </p>
        <Button size="m" text="contactame" />
      </div>
    </div>
  );
};
