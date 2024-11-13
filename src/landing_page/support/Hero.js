import React from 'react';
import CreateTicket from './CreateTicket';
import SupportPage from './SupportPage';


import Footer from '../Footer';
import Navbar from '../Navbar';

function Hero(){
    return(
        <>
        <Navbar/>
        <CreateTicket/>
        <SupportPage/>
        <Footer/>
        </>
    );
}

export default Hero;