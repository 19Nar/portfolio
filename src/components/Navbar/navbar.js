import React from "react";
import NavigationItem from "../Navbar/NavigationItem/navigationItem";


const navbar = () => {
  return (
    <nav>

        <NavigationItem linkTo="home" displayText="Home" />
        <NavigationItem linkTo="about" displayText="Meer Info" />
        <NavigationItem linkTo="work" displayText="Projecten" />
        <NavigationItem linkTo="contact" displayText="Contact" />

      </nav>
  )
}

export default navbar

