import React from 'react';
import './Skills.css';
import html from '../../assets/skills/html.webp';
import redux from '../../assets/skills/Redux.png';
import java from '../../assets/skills/java.jpg';
import oracleDB from '../../assets/skills/oracle-database.png';
import git from '../../assets/skills/Git-Icon.png';
import mocha_chai from '../../assets/skills/mocha-chai.png';
import express from '../../assets/skills/express.jpg';
import css from '../../assets/skills/css_logo.png';
import javascript from '../../assets/skills/javascript.png';
import react_logo from '../../assets/skills/react_logo.png';
import node from '../../assets/skills/node_logo.jpg';
import bootstrap from '../../assets/skills/bootstrap.jpg';
import materialui from '../../assets/skills/materialui.png';
import SectionHeading from '../SectionHeading/SectionHeading';

const Skills = () => {
    const skillsList = [
        {
            icon: html,
            name: 'HTML'
        },
        {
            icon: css,
            name: 'CSS'
        },
        {
            icon: javascript,
            name: 'JAVASCRIPT'
        },
        {
            icon: bootstrap,
            name: 'BOOTSTRAP'
        },
        {
            icon: react_logo,
            name: 'REACT.JS'
        },
        {
            icon: materialui,
            name: 'MATERIAL UI'
        },
        {
            icon: node,
            name: 'NODE.JS'
        },
        {
            icon: express,
            name: 'EXPRESS.JS'
        },
        {
            icon: mocha_chai,
            name: 'MOCHA-CHAI'
        },
        {
            icon: redux,
            name: 'REDUX'
        },
        {
            icon: java,
            name: 'JAVA'
        },
        {
            icon: oracleDB,
            name: 'ORACLE DB'
        },
        {
            icon: git,
            name: 'GIT'
        }
    ];
    const mainHead = 'Skills';
    const subHead = 'My programming skills';
    return (
        <div id='mySkills' className='skills' data-aos = "fade-up">
            <SectionHeading mainHead={mainHead} subHead={subHead} />
            <div className='skill-details'>
                <div className='skills-list'>
                    {
                        skillsList.map(skill => {
                            return (
                                <div className='skill-detail' data-aos = "flip-up">
                                <div className="card skill-card">
                                    <img className="card-img-top skill-logo" src={skill.icon} alt="Card image cap" />
                                    <div className="card-footer">
                                        <h4 className="card-text skill-name" >{skill.name}</h4>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Skills;