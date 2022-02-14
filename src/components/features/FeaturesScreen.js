import React, { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { Card } from "../ui/Card";
import "./features-styles.css";

export const FeaturesScreen = () => {
  const ref = useRef();
  const [inView] = useInView(ref);
  return (
    <div
      ref={ref}
      id="features"
      className="w-100 d-flex flex-column align-items-center content-section features"
    >
      <p className={`text-uppercase mb-3${inView ? " isVisibleX" : ""}`}>
        caracteristicas
      </p>
      <h2 className={`text-capitalize mb-5${inView ? " isVisibleX" : ""}`}>
        lo que hago
      </h2>
      <div
        className={`w-100 content-features mt-2${inView ? " isVisibleY" : ""}`}
      >
        <Card
          key={1}
          icon="fa-desktop"
          title="desarrollador fullstack"
          description="Me gusta codificar cosas desde cero al igual que continuarlas y disfruto dando vida a las ideas en el navegador, desde el frontend hasta el servidor."
        />
        <Card
          key={2}
          icon="fa-mobile-alt"
          title="desarrollador movil"
          description="Disfruto la creación de app moviles interactivas, rapidas, faciles de usar y construidas con las mejores practicas para la creación de proyectos ambiciosos."
        />
        <Card
          key={3}
          icon="fa-cogs"
          title="desarrollador devOps"
          description="Unifico y automatizo procesos fundamentales para las tareas relacionadas con la combinación de codigo y el mantenimiento y la gestión de aplicaciones."
        />
      </div>
    </div>
  );
};
