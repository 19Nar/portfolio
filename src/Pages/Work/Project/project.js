import React from "react";

import Fade from "react-reveal/Fade";

import "./project.css";

const project = (props) => {
  return (
    <Fade bottom>
      <div className="project">
        <a href={props.url}>
          <img src={props.imageSrc} alt={props.title}></img>
        </a>
        <h1>{props.title}</h1>
        <span>{props.service}</span>
      </div>
    </Fade>
  );
}

project.propTypes = {};

export default project;
