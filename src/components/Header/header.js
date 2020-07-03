import React from "react";

import Fade from "react-reveal/Fade";
import data from "../../data/mydata";

import "./header.css";

const header = () => {
  return (
    <div className="home">
      <h1 className="heading-background">N V M</h1>
      <header>
        <h1>
          <Fade bottom cascade>
            {data.name}
          </Fade>
        </h1>
      </header>
      <Fade bottom>
        <p className="header-title">
          {data.headerTagline[0]}
          <br></br>
          {data.headerTagline[1]}
          <br></br>
          {data.headerTagline[2]}
          <br></br>
          <button>
            <a
              className="mail"
              href={`mailto:${data.contactEmail}`}
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </button>
          <br></br>
          <button>
            <a href={"https://www.linkedin.com/in/narine-vanbeginne-a574a950/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAArAXKMB_iUNNz9qWrnxuCenkT4lw_x8Qu8,1593765887633)/"} rel="noopener noreferrer">
              CV: Zoom&Download
            </a>
          </button>
        </p>
      </Fade>
    </div>
  );
};

header.propTypes = {};

export default header;
