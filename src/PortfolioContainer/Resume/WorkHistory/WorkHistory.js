import React from 'react';
import ResumeSubSectionHeading from '../ResumeSubSectionHeading/ResumeSubSectionHeading';
import './WorkHistory.css';

const WorkHistory = () => {
    const domainDetails = [
        {
            domain: 'Web development',
            description: [
                'Developing components in front end using React.js',
                'Creating API’s using Express.js based on UI requirements.',
                'Performing the testing of the Node.js code by creating unit test cases using Mocha–Chai frameworks.'
            ]
        },
        {
            domain: 'Android development',
            description: [
                'Hands on experience in android programming using java.',
                `Analyzing the defects [logs] for finding the root cause of the issue raised in jira tool.`,
                'With the help of root cause analysis debugging the code to resolve the issue.'
            ]
        }
    ]
    return (
        <div id='workhistory' className='content'>
            <ResumeSubSectionHeading headingText = {'Experience'}/>
            <div className='experience-content'>
                <ul>
                    <li className='cmp-name'>HCL Technologies</li>
                    <li>
                        <table className='about-experience'>
                            <tr style={{marginTop:'5%' }}>
                                <td style={{ fontWeight: 'bold'}}>Period</td>
                                <td>:</td>
                                <td>Jan 28th 2021 – till date</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold' }}>Designation</td>
                                <td>:</td>
                                <td>Junior Developer</td>
                            </tr>
                        </table>
                    </li>
                </ul>
                <div className='key-result-area'>
                    <h5>Key results area :</h5>
                    <div >
                        <ul>
                            {domainDetails.map(detail => {
                                return (
                                    <li className='key-result-details'>
                                        <div className='key-result-section'>
                                            <div className='domain-title'>
                                                <h4>{detail.domain}</h4>
                                            </div>
                                            <div className='domain-desc'>
                                                <ul style={{listStyleType:'initial'}}>
                                                    {detail.description.map(desc => {
                                                        return (
                                                            <li>{desc}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkHistory;