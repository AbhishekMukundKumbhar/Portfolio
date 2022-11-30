import React from 'react';
import './Projects.css';
import Amk from '../../assets/projects/AMK_mart.png';
import post_now from '../../assets/projects/post_now.png';
import { FaGithub, FaEye } from 'react-icons/fa';
import SectionHeading from '../SectionHeading/SectionHeading';

const Projects = () => {
    const projectList = [
        {
            name: 'AMK mart',
            gitLink: `https://github.com/AbhishekMukundKumbhar/react_shopping_clone/tree/master/shopping_clone_react`,
            img: Amk,
            previewLink: `https://drive.google.com/file/d/1sE0gGspjSx2JAbKlzFwMPMFTQFAOR9M2/view?usp=drivesdk`,
            desc: `Developed “AMK mart” a ecommerce shopping application that includes the 
            functionalities like home page UI to view all products, view product details, add to cart, UI for 
            cart, increase and decrease quantity of product in cart, total price and billing with respect 
            quantity of products, remove product from cart.`
        },
        {
            name: 'Post Now !',
            gitLink: `https://github.com/AbhishekMukundKumbhar/Full-stack-social-media-app/tree/master/Full_stack_social_media_app`,
            img: post_now,
            previewLink: `https://drive.google.com/file/d/1s4KJoK4HLdllMMxHFB17Qe45AFgdtX3q/view?usp=drivesdk`,
            desc: `Developed “Post now!” a social media application that includes all the real time 
            requirements like posting post, like - unlike and commenting on post, follow - unfollow of 
            users, user profile, searching profile and so on.`
        }
    ];
    const mainHead = 'Projects';
    return (
        <div id='myProjects' className='projects' data-aos = "fade-up">
            <SectionHeading mainHead={mainHead} />
            <div className='projects-content'>
                <div className='project'>
                    {
                        projectList.map(item => {
                            return (
                                <div className='project-detail' data-aos = "zoom-in">
                                    <img className='project-img' src={item.img} alt='no Internet' />
                                    <div className='project-info'>
                                        <h1>{item.name}</h1>
                                        <p className='project-desc'>{item.desc}</p>
                                        <div className='project-btns'>
                                            <a href={item.previewLink} className='btn' target={'_blank'}><FaEye  className='project-icon'size={35} />Preview</a>
                                            <a href={item.gitLink} className='btn' target={'_blank'}><FaGithub className='project-icon' size={35} />Github</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;