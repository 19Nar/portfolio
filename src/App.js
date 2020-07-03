import React from "react";
import "./App.css";

import Header from "./components/Header/header";
import About from "./Pages/About/about";
import Work from "./Pages/Work/work";
import Contact from "./Pages/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
      </div>
      
  );
};

export default App;
