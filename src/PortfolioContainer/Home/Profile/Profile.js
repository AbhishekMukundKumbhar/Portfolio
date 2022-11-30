import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
    return (
        <div id='myprofile' className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100008871036864&mibextid=ZbWKwL' target={'_blank'}>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/kumbar_abhi_1919/' target={'_blank'}>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/abhishek-mukund-kumbhar-343776201' target={'_blank'}>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/AbhishekMukundKumbhar' target={'_blank'}>
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Abhishek Mukund Kumbhar</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={
                                        [
                                            "Software Engineer",
                                            1000,
                                            "Full stack Developer",
                                            1000,
                                            "Front-end react developer",
                                            1000,
                                            "MERN stack dev",
                                            1000,
                                        ]
                                    }
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='#contactme'>
                            <button className='btn primary-btn'>
                                Contact me
                            </button>
                        </a>
                        <a href='AbhishekCV.pdf' download='AbhishekCV.pdf'>
                            <button className='btn highlighted-btn'>Get resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;