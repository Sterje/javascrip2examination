import { useSelector } from 'react-redux';



import React from 'react';

import './Home.css'

const Home = () => {
    const theme = useSelector((state) => state.theme.theme);

    console.log(document.querySelector('.home-container'));
   
    return (
        <div className={`home-container ${theme}`}>
            
        </div>
    );
};

export default Home;
