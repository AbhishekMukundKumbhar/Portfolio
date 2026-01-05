import React, { useEffect } from "react";

import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import MainFooter from "../Footer/Footer";
import About from "../AboutMe/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../ContactMe/Contact";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <MainFooter />
    </div>
  );
};
export default Home;
