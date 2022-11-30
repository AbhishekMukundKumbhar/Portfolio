import React from 'react';
import ResumeSubSectionHeading from '../ResumeSubSectionHeading/ResumeSubSectionHeading';
import './Education.css';

const Education = () => {
    const details = [
        {
            name: 'B.E Cambridge Institute Of Technology, Bangalore.',
            university: 'University',
            university_name: 'Visvesvaraya Technological University',
            CGPA: 'CGPA',
            marks: 8.17,
            passedOut: 2020
        },
        {
            name: 'VSM Societys, G I Bagewadi PU College,Nippani',
            university: 'University',
            university_name: 'Department of PreUniversity Education.',
            percentage: 'Percentage',
            marks: '79.7%',
            passedOut: 2016
        },
        {
            name: 'Shri Mahalaxmi High School, Pattankudi',
            university: 'University',
            university_name: 'Karnataka Secondary Education Examination Board',
            percentage: 'Percentage',
            marks: '76.8%',
            passedOut: 2014
        }
    ]
    return (
        <div id='education' className='content'>
            <ResumeSubSectionHeading headingText = {'Education'}/>
            <div className='content-container'>
                <div className='education-details'>
                    <ul>
                        {details.map(detail => {
                            return (
                                <li>
                                    <div className='education-detail-section'>
                                        <div className='clg-title'>
                                            <h4>{detail.name}</h4>
                                            <div className='passed-out-year'>Passed out :{detail.passedOut}</div>
                                        </div>
                                        <table className='education-table'>
                                            <tr>
                                                <td>{detail.university} </td>
                                                <td>:</td>
                                                <td>{detail.university_name}</td>
                                            </tr>
                                            <tr>
                                                <td>{detail.CGPA ? detail.CGPA : detail.percentage}</td>
                                                <td>:</td>
                                                <td>{detail.marks}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        </div >
    )
}
export default Education;