import React from 'react';
import { Link } from 'react-router-dom';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6'>
                    <img src="media/images/education.svg" alt="education" style={{width:"70%"}}></img>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <Link to='/</div>' className='mx-5' style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market</p>
                    <Link to='/' className='mx-5' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                </div>
            </div>
        </div>
     );
}

export default Education;