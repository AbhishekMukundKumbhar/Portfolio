import React from 'react';
import './Certification.css';
import logo from '../../../assets/logo_jspiders.png';
import ResumeSubSectionHeading from '../ResumeSubSectionHeading/ResumeSubSectionHeading';
// import certificate from '../../../assets/jspiders_certificate.jpg';

const Certification = () => {
    return (
        <div id='certification' className='content'>
            <ResumeSubSectionHeading headingText = {'Certification'}/>
            <div className='certification-center'>
                <img className='jspider-logo' src={logo} />
                Java Training and Development Centre</div>
            <div className='certification-content'>
                <div className='certification-left'>
                    <div className='certification-details'>
                        <p className='certification-desc'>Successfully completed the professional course on following technologies :</p>
                        <ul className='tech-list'>
                            <li>Core Java</li>
                            <li>Oracle SQL database</li>
                            <li>Web Technology (HTML, CSS, React.js)</li>
                            <li>Frameworks</li>
                        </ul>
                    </div>
                    <address className='center-address'><strong>Address :</strong> 18,1st floor, Brigade Seshmahal, F1, Vasavi Temple<br /> St, Vishweshwarapura, Basavanagudi,<br /> Bengaluru, Karnataka 560004</address>
                </div>
                <div className='certification-right'>
                    <div className='certification-img'>

                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <a href='https://www.jspiders.com/' target={'_blank'} style={{ color: 'blue' }}>www.jspiders.com</a>
            </div>
        </div>
    )
}
export default Certification;