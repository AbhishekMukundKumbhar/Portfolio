import React, { FC } from "react";
import './ResumeSubSectionHeading.css';

interface IResumeSubSectionHeading{
headingText:string;
className ?: string;
Icon?:any
}

const ResumeSubSectionHeading:FC<IResumeSubSectionHeading> = ({headingText, className='', Icon}) => {
    return (
        <div className={`content-heading ${className}`}>
           {Icon?Icon('content-heading-icon'):<></>} {headingText}
        </div>
    )
}

export default ResumeSubSectionHeading;