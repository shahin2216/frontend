import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RighSection';

import Navbar from '../Navbar';
import Footer from '../Footer';



function Hero() {
    return (  
        <>
        <Navbar/>
        <LeftSection/>
        <RightSection/>
        <Footer/>
        </>
    );
}

export default Hero;