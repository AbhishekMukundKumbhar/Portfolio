import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typical from 'react-typical';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PuffLoader from "react-spinners/PuffLoader";

import imgBack from '../../assets/images/mailz.jpeg';
import './Contact.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const Contact = () => {
    const [banner, setBanner] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const mainHead = 'Contact';
    const subHead = `Let's keep in touch`;
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(form.current.user_name.value.length, form.current.message.length)
        if (form.current.user_name.value.length === 0 || form.current.user_email.value.length === 0 || form.current.message.value.length === 0) {
            setBanner('Please fill all the fields');
            toast.error('Please fill all the fields');
        } else {
            setLoading(true);
            emailjs.sendForm('service_ccjum4a', 'template_t9yd7ck', form.current, 'EuWfwmX_rN04mG1q7')
                .then((result) => {
                    console.log(result.text);
                    toast.success('Thank you for contacting Abhishek');
                    banner && setBanner('');
                    setLoading(false);
                    form.current.user_name.value = '';
                    form.current.user_email.value = '';
                    form.current.message.value = '';
                }, (error) => {
                    toast.error('Your message not sent.Try again');
                    setLoading(false);
                    console.log(error.text);
                });
        }
    }

    return (
        <div id='contactme' className='main-container' data-aos="fade-up">
            <SectionHeading mainHead={mainHead} subHead={subHead} />
            <div className='central-form' data-aos="fade-up">
                <div className='col' data-aos="fade-up">
                    <h2>
                        <Typical
                            loop={Infinity}
                            steps={
                                [
                                    "Get in touch",
                                    1000
                                ]
                            }
                        />
                    </h2>
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
                <div className='back-form' data-aos="fade-up">
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt='image not found' />
                    </div>
                    <form ref={form} onSubmit={onSubmit}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type={'text'} name='user_name' />

                        <label htmlFor='email'>Email</label>
                        <input type={'email'} name='user_email' />

                        <label htmlFor='message'>message</label>
                        <textarea type={'text'} name='message' />

                        <div className='send-btn'>
                            <button type={'submit'} value='Send'>
                                {loading ? 
                                <span style={{marginRight:'25px'}}>
                                <PuffLoader
                                    color={'white'}
                                    size={25}
                                    loading = {true}
                                    cssOverride={{margin:'auto'}}
                                />
                                </span>:''}
                                
                                send<i class="fa fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;