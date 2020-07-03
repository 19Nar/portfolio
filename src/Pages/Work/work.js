import React from "react";

import Project from "./Project/project";
import Fade from "react-reveal/Fade";
import data from "../../data/mydata";

import "./work.css";

const work = () => {
  return (
    <div className="work">
      <h1 className="heading">
        <Fade bottom cascade>
          Projecten
        </Fade>
      </h1>
      <p>Klik op de foto voor meer details</p>
      <div className="work-content">
        {data.projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            service={project.service}
            imageSrc={project.imageSrc}
            url={project.url}
            //description={project.description}
          ></Project>
        ))}
      </div>
    </div>
  );
};

work.propTypes = {};

export default work;
