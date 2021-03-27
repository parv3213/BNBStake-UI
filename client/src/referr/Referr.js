import './Referr.css';
import bckImg from '../fondo-stake.jpg';
import React  from 'react';

function Referr() {
  return (
    <div className="Referr">
        <p className="sm-txt" style={{margin: 0, marginBottom: 15}}>
            1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily<br></br>
            2. Minimum deposit amount is 0.05 BNB and you can have multiple deposits<br></br>
            3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)
        </p>


        <div class="flex-row">
            <div id="staked" style={{backgroundImage: "url("+bckImg+")", backgroundSize: "cover", backgroundPosition: "center"}}>
                <p style={{marginBottom: 0, marginTop: 0}}>Total Stacked CAKE</p>
                <p class="bg-txt">0.00</p>
                <p style={{marginBottom: 0, marginTop: 30}}>Available BNB for withdrawal</p>
                <p class="bg-txt">0.00</p>
                <a class="cta-fw" style={{marginTop: 30}}>WITHDRAW CAKE</a>
            </div>

            <div id="referral">
                <div class="flex-col">
                    <p class="sm-txt" style={{margin: "0 0 16px 0"}}>Your Referral Link</p>
                    
                    <div class="flex-row">
                        <div class="input">https://www.cakestake.app/?ref=0x0000000</div>
                        <a class="cta"style={{marginRight: 15}}>Ctr+C</a>
                    </div>

                    <div class="flex-row" style={{marginTop: 25}}>
                        <div class="flex-col" style={{width: "33%", padding: 0}}>
                            <p class="sm-txt">Total Referral Earned</p>
                            <p class="bg-txt">0.000</p>
                            <p class="sm-txt">Invited Users by You</p>
                            <p class="bg-txt">0</p>
                        </div>

                        <div class="flex-col" style={{width: "33%", padding: 0}}>
                            <p class="sm-txt">Total Referral Withdrawn</p>
                            <p class="bg-txt">0.000</p>
                        </div>

                        <div class="flex-col" style={{width: "33%", padding: 0}}>
                            <p class="sm-txt">Earn for promotion BNBstake</p>
                            <p class="sm-txt">You will receive:</p>
                            <br></br>
                            <p class="sm-txt">5% from each level 1 referral deposits</p>
                            <p class="sm-txt">2.5% from each level 2 referral deposits</p>
                            <p class="sm-txt">0.5% from each level 3 referral deposits</p>
                            <br></br>
                            <p class="sm-txt italic">Note! You need to have at least 1 deposit to start receive earnings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Referr;