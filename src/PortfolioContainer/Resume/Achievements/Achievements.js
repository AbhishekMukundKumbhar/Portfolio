import React from 'react';
import ResumeSubSectionHeading from '../ResumeSubSectionHeading/ResumeSubSectionHeading';
import './Achievements.css';

const Achievements = () => {
    const listItems = [
        {
            number : 1,
            title: 'INTUIT',
            subtitle: 'Project exhibition',
            rank: 'First place',
            text: 'Secured 1st place in INTUIT an intra collegiate project exhibition.'
        },
        {
            number : 2,
            title: 'TECH-FEST',
            subtitle: 'MATLab coding',
            rank: 'Second place',
            text: 'Secured 2nd place in MATLab coding in intra collegiate tech-fest.'
        },
        {
            number : 3,
            title: 'HACKATHON',
            subtitle: 'IEEE day',
            rank: 'Second place',
            text: 'Secured 2nd place in HACKATHON event in intra collegiate IEEE day.'
        }
    ]
    return (
        <div id='achievements' className='content'>
            <ResumeSubSectionHeading headingText = {'Achievements'}/>
            <div className='achievement-container'>
                {listItems.map(item => {
                    return (
                        <div class="card achievement-body" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title achievement-title">{item.title}</h5>
                                <h6 class="card-subtitle mb-3 text-center">{item.subtitle}</h6>
                                <h5 class="card-title achievement-rank">{item.rank}</h5>
                                <p><u>Description :</u></p>
                                <p class="card-text achievement-text">{item.text}</p>
                                <p class="card-text text-muted text-center">{item.number}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Achievements;