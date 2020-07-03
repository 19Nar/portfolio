import Movie from "../images/movie.png";
import Book from "../images/book.png";
import Weather from "../images/weather.png";
import Collage from "../images/PRJcollage.jpg";

import Github from "../icons/social/GITHUB.png";
import LinkedIn from "../icons/social/linkedin.jpg";
import facebook from "../icons/social/facebook.png";

export default {
  name: "NARINE VANBEGINNE",
  headerTagline: [
    "Hallo, ik ben Narine!",
    "Een webontwikkelaar ",
    "uit België",
  ],
  contactEmail: "narinemkn@gmail.com",
  abouttext: [
    "Detailgerichte professional met meer dan 10 jaar ervaring ",
    "en een bewezen kennis van lesgeven, vertalen... ",
    "Beginner in datacommunicatie, webplatformontwikkeling. ",
    "Momenteel ben ik niet alleen gefocust op webdesign ",
    "en frontend ontwikkeling maar ook op backend. ",
    "Als frontend ontwikkelaar combineer ik het grafische met het technische aspect, ",
    "maar besteed ik ook graag extra aandacht aan een goede backend. ",
    "Een degelijke backend is enorm belangrijk voor een webapplicatie.",
  ],
  aboutskills:
    "HTML5/CSS (Bootstrap 4, Grid, Flexbox), Javascript, Restful API, GIT/Node/Express, MongoDB, Vue/React.",
  aboutlanguages: " Engels,  Nederlands,  Frans,  Russisch,  Armeens ",
  ShowAboutImage: true,
  projects: [
    {
      id: 1,
      title: "Movie CMS",
      service: [
      "#React.js   #MongoDB   #Express.js",
  ],
      imageSrc: Movie,
      url: "http://www.narinevanbeginne.be/movie",
    },
    {
      id: 2,
      title: "Boek API",
      service: " #Javascript   #Bootstrap",
      imageSrc: Book,
      url: "https://19nar.github.io/searchBook-2-API-async-await/",
    },
    {
      id: 3,
      title: "Weer API",
      service: "#Javascript   #CSS",
      imageSrc: Weather,
      url: "https://19nar.github.io/weatherMap1-Antwerpen--API/",
    },
    {
      id: 4,
      title: "Kleine projecten",
      service: "#Javascript, #React.js, #Express.js, #HTML, #CSS",
      imageSrc: Collage,
      url: "https://github.com/19Nar?tab=repositories",
    },
  ],
  social: [
    {
      imageSrc: Github,
      url: "https://github.com/19Nar",
    },
    {
      imageSrc: LinkedIn,
      url: "https://www.linkedin.com/in/narine-vanbeginne-a574a950/",
    },
    {
      imageSrc: facebook,
      url: "https://www.facebook.com/narine.makyan/",
    },
  ],
};
