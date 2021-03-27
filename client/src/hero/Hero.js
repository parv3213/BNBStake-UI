import './Hero.css';
import bckImg from '../fondo-balance.jpg'
import React  from 'react';

function Hero() {
  return (
    <div className="Hero">
        <div id="basic-info"  style={{backgroundImage: "url("+bckImg+")", backgroundSize: "200%", backgroundPosition: "center left"}}>
            <p>Total income: based on your tarrif plan (from 5% to 8% daily)</p>
            <p>Basic interest rate: +0.5% every 24 hours - only for new deposits</p>
            <p>Minimal deposit: 0.05 BNB, no maximal limit</p>
            <p>Earnings every moment, withdraw any time (if you use capitalization of interest you can withdraw only after end of your deposit)</p>
        </div>
        
        <div id="balance">
            <div>
                <p class="d-flex flex-row">Total BNB Staked<div class="cta" style={{marginLeft: 5, alignItems: "center"}}>Contract</div></p>
                <h2>37,507.664</h2>
            </div>

            <br></br>

            <div>
                <p class="d-flex flex-row">Total Contract Balance</p>
                <h2>15,592.605</h2>
            </div>
        </div>
    </div>
    
  );
}

export default Hero;
