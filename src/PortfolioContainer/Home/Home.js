import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import './Home.css';
import MainFooter from "../Footer/Footer";
import About from "../AboutMe/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../ContactMe/Contact";

const Home = ()=>{
    useEffect(()=>{
        Aos.init({offset:80,duration : 1000});
        Aos.refresh();
      },[]);
    return(
        <div className="home-container">
            <Profile />
            <Footer />
            <About/>
            <Resume/>
            <Skills/>
            <Projects/>
            <Contact/>
            <MainFooter />
        </div>
    )
}
export default Home;