import React from 'react';
import './About.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const About = () => {
        const mainHead =  'About me'; 
        const subHead = 'Why to choose me?';
    return (
        <div id='aboutme' className='about-me' data-aos = "fade-up">
            <SectionHeading  mainHead = {mainHead} subHead = {subHead}/>
            <div className='about-container'>
                <div data-aos = "fade-up" className='about-left'>
                    <div className='about-profile'>
                        <div className='about-profile-background'>

                        </div>
                    </div>
                </div>
                <div data-aos = "fade-up" className='about-right'>
                    <div className='about-me-text'>
                        Solution driven web developer with 2 years of experience, from Bangalore, BE graduated in ECE with 8.17 CGPA.
                        Adept at contributing to a highly collaborative work environment and finding solutions.
                        Good knowledge of front end and server side languages.
                        In depth knowledge of Oracle SQL database, skillful in developing APIs.
                    </div>
                    <div className='about-me-name'>
                        -Abhishek Mukund Kumbhar
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;