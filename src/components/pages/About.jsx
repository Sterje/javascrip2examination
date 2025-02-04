import { useSelector } from 'react-redux';
import React from 'react';
import './About.css'

const About = () => {
    const theme = useSelector((state) => state.theme.theme);
    
    return (
        <div className={`about-container ${theme}`}>
            
        </div>
    );
};

export default About;