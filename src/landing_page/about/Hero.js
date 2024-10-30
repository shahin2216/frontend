import React from 'react';
import AboutPage from './AboutPage';
import Team from './Team';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Hero() {
    return (  
        <>
        <Navbar/>
        <AboutPage/>
        <Team/>
        <Footer/>
        </>
    );
}

export default Hero;