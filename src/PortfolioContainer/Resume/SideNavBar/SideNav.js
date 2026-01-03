import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideNav.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaHistory,
  FaCertificate,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <>
      {/* <div className='resume-heading'>
                <h2 className='resume-text'>Resume</h2>
            </div> */}
      <div className="side-nav">
        <ul className="side-nav-menu">
          <a className="menu-item" active href="#education">
            <FaGraduationCap className="sidemenu-item-icon" size={35} />
            <span className="menu-item-name">Education</span>
          </a>
          {/* <a className="menu-item" href="#achievements">
            <FaTrophy size={35} className="sidemenu-item-icon" />
            <span className="menu-item-name">Achievements</span>
          </a> */}
          {/* <a className='menu-item' href='#workhistory' ><FaHistory size={35} className='sidemenu-item-icon' /><span className='menu-item-name'>Work history</span></a> */}
          <a className="menu-item" href="#certification">
            <FaCertificate size={35} className="sidemenu-item-icon" />
            <span className="menu-item-name">Certification</span>
          </a>
          {/* <NavLink className='menu-item' activeClassName='active' to='/' ><FaGraduationCap size={35} style={{ color: 'black', marginRight: '1rem' }} />Education</NavLink> */}
          {/* <NavLink className='menu-item' to='/achievements' ><FaTrophy size={35} style={{ color: 'black', marginRight: '1rem' }} />Achievements</NavLink> */}
          {/* <NavLink className='menu-item' to='/workhistory' ><FaHistory size={35} style={{ color: 'black', marginRight: '1rem' }} />Work history</NavLink> */}
          {/* <NavLink className='menu-item' to='/certification' ><FaCertificate size={35} style={{ color: 'black', marginRight: '1rem' }} />Certification</NavLink> */}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
