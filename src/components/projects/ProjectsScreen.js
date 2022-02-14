import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectStartLoading } from "../../actions/projects";
import { useInView } from "../../hooks/useInView";
import "./projects-styles.css";

export const ProjectsScreen = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);

  const ref = useRef();
  const [inView] = useInView(ref);

  useEffect(() => {
    dispatch(projectStartLoading());
  }, [dispatch]);

  return (
    <div
      ref={ref}
      id="projects"
      className="w-100 d-flex flex-column align-items-center content-section projects mb-3"
    >
      <p
        id="projects"
        className={`text-uppercase mb-3${inView ? " isVisibleX" : ""}`}
      >
        visita mi portafolio
      </p>
      <h2 className={`text-capitalize mb-5${inView ? " isVisibleX" : ""}`}>
        proyectos
      </h2>
      <div className={`w-100 content-cards${inView ? " isVisibleY" : ""}`}>
        {projects.map(({ id, img, title, url }) => (
          <div
            key={id}
            className="d-flex justify-content align-items-center mt-2 cards"
          >
            <div className="cards-content">
              <div className="cards-content-img">
                <img src={img} alt={title} />
              </div>
              <p className="text-uppercase pt-2">desarrollo</p>
              <a href={url}>
                {title}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
