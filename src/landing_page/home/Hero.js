import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero_image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online Platform to invest in everything</p>
                <button className="p-3 btn btn-primary" style={{width:"20%",margin:"0 auto"}}>Signup</button>               
            </div>
            
        </div>
     );
}

export default Hero;