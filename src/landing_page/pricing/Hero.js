import React from 'react';
import Brokerage from './Brokerage';
import PricingPage from './PricingPage';

import Navbar from '../Navbar';
import Footer from '../Footer';

function Hero() {
    return ( 
        <>
        <Navbar/>
        <Brokerage/>
        <PricingPage/>
        <Footer/>
        </>
     );
}

export default Hero;