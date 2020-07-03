import React from "react";

import { Link } from "react-scroll";

import "./navigationItem.css";

const NavigationItem = ({ linkTo, displayText }) => {
  return (
    <>
      <Link
        className="link"
        activeClass="active"
        to={linkTo}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {displayText}
      </Link>
    </>
  );
}

export default NavigationItem;
