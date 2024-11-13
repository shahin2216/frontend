import React from 'react';
import { Link } from 'react-router-dom';


function stats() {
    return (  
        <div className='container p-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investements</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks,spam,"gamification",or annoying push notification.High quality apps that you use at your pace,the way you like</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem.Our investents in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With iniatiative like Nudge and kill Switch, we dont just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt="ecossytem" style={{width:"90%"}}></img>
                    <div className='text-center p-5'>
                        <Link to='/' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                        <Link to='/' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default stats;