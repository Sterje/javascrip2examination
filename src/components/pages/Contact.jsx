import { useSelector } from 'react-redux';
import React from 'react';
import './Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
    const theme = useSelector((state) => state.theme.theme);
    
    return (
        <section className={`contact-wrapper ${theme}`}>
            <section className={`contact-container ${theme}`}>
                <section className={`h2-container ${theme}`}>
                    <h2>Contact me here:</h2>
                </section>
                <section className='img-container'>
                    <a href="mailto:jespermail@gmail.com"><IoIosMail className='icon' /></a>  
                    <a href="https://www.linkedin.com/in/jesper-eriksson-stenberg-a13022326/" target="_blank"><CiLinkedin className='icon'/></a>
                    <a href="https://github.com/Sterje" target="_blank"><FaGithub className='icon'/></a>
                </section>
            </section>
        </section>
    );
};

export default Contact;
