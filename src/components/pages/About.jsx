import { useSelector } from 'react-redux';
import React from 'react';
import './About.css';

function About({ user }) { // Tar emot user som en prop
    const theme = useSelector((state) => state.theme.theme);

    return (
        <section className={`about-wrapper ${theme}`}>
            <div className={`about-container ${theme}`}>
                <h1>About</h1>
                <p>{user?.name || "Unknown"}</p>
                <p>{user?.description || "No description available."}</p>
                <p>Age: {user?.age ?? "N/A"}</p>
            </div>
        </section>
    );
}

export default About;
