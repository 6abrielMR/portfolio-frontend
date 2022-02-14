import React from "react";
import { Button } from "./Button";
import "./ui-styles.css";

export const Navbar = () => {
  return (
    <div className="bg-navbar container d-flex flex-column justify-content-start pt-5">
      <div className="avatar w-100 d-flex justify-content-center align-items-center pb-2">
        <div className="img-content-avatar"></div>
      </div>
      <div className="pt-4 pb-3 ml-4 options">
        <ul className="p-0">
          <li>
            <a href="#home">
              <i className="fas fa-home mr-3"></i>Inicio
            </a>
          </li>
          <li>
            <a href="#features">
              <i className="fas fa-suitcase mr-3"></i>Caracteristicas
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fas fa-layer-group mr-3"></i>Proyectos
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="fas fa-user mr-3"></i> Currículo
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-comment mr-3"></i>Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="separator"></div>
        <p className="pt-3 pb-3">encuentrame</p>
        <div className="d-flex">
          <Button icon="fab fa-linkedin-in" />
          <Button icon="fab fa-github" />
        </div>
      </div>
    </div>
  );
};
