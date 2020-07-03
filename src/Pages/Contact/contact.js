import React from "react";

import Fade from "react-reveal/Fade";
import data from "../../data/mydata";

import "./contact.css";

const contact = () => {
  console.log(data.social);
  return (
    <div className="contact">
      <h1>
        <Fade bottom cascade></Fade>
      </h1>
      <Fade bottom>
        <div className="contact-content">
          <h1>
            Laten we samen<br></br>
            uw volgende<br></br>
            <span className="amazing">project creëren</span>
          </h1>
          <ul>
            {data.social.map((link, index) => (
              <div key={index}>
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                >
                  <img src={link.imageSrc} alt="" />
                </a>
              </div>
            ))}
            <span>
              <h3>
                {" "}
                <a href="narinevanbeginne.be">narinevanbeginne.be</a>
              </h3>
            </span>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

contact.propTypes = {};

export default contact;
