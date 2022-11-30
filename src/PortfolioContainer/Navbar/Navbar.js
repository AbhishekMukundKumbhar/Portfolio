import React, { useState } from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navBg,setNavBg] = useState(false);
    const handleClick = () => setClick(!click);
    const changeNavBg = () => {
        if(window.scrollY>=100){
            setNavBg(true);
        }
        else{
            setNavBg(false);
        }
    }

    window.addEventListener("scroll",changeNavBg);
    return (
        <div className={navBg?'header header-bg':'header'}>
            <a href='#myprofile'>
                <h1>
                    Portfolio
                </h1>
            </a>
            <ul className={click?'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='#myprofile' onClick={click?handleClick:''}>Home</a>
                </li>
                <li>
                    <a href='#aboutme' onClick={click?handleClick:''}>About</a>
                </li>
                <li>
                    <a href='#myResume' onClick={click?handleClick:''}>Resume</a>
                </li>
                <li>
                    <a href='#mySkills' onClick={click?handleClick:''}>Skills</a>
                </li>
                <li>
                    <a href='#myProjects' onClick={click?handleClick:''}>Projects</a>
                </li>
                <li>
                    <a href='#contactme' onClick={click?handleClick:''}>Contact</a>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click?
                <FaTimes size={20} style={{color:'white'}}/> :
                <FaBars size={20} style={{color:'white'}}/>
            }    
            </div>
        </div>
    )
}

export default Navbar;