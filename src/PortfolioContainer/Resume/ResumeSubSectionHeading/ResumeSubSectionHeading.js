import React from "react";
import './ResumeSubSectionHeading.css';
const ResumeSubSectionHeading = (props) => {
    return (
        <div className='content-heading'>
            {props.headingText}
        </div>
    )
}

export default ResumeSubSectionHeading;