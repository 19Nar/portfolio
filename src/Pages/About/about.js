import React from "react";

import Fade from "react-reveal/Fade";
import data from "../../data/mydata";

import "./about.css";

const about = () => {
  return (
    <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              Doelstelling
            </Fade>
          </h1>
          <Fade bottom>
            <p className="info">{data.abouttext}</p>
            <br></br>
            <h1>
              <Fade bottom cascade>
                IT-Skills
              </Fade>
            </h1>
            <p className="itskils">{data.aboutskills}</p>
            <h1>
              <Fade bottom cascade>
                Talen
              </Fade>
            </h1>
            <p className="languages">{data.aboutlanguages}</p>
          </Fade>
        </div>
      </div>
  )
}

about.propTypes = {

}

export default about


