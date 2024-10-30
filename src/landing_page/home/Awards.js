import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="Award_image"></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha client contribute to over million volumes in India daily by trading and Investments</p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                        <li>Stocks and IPO</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Security</li>
                    </ul> 
                        </div>
                    </div>
                   <img src="media/images/pressLogos.png" alt="press logo" style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;