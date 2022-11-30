import React from 'react';
import './SectionHeading.css';

const SectionHeading = (props) => {
    return(
        <div className='section-headings'>
                <h2 className='main-heading-text'>{props.mainHead && props.mainHead}</h2>
                <p className='sub-heading-text'>{props.subHead && props.subHead}</p>
        </div>
    )
}

export default SectionHeading;