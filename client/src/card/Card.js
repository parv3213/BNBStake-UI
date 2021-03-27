import './Card.css';
import React  from 'react';

function Card() {
  return (
    <div className="Card">
        <div class="plan">
            <p>Plan 1</p>
        </div>

        <div class="flex-row">
            <div class="flex-col w-50">
                <p class="sm-txt">Daily Profit</p>
                <p class="bg-txt">18.1%</p>
            </div>

            <div class="flex-col w-50">
                <p class="sm-txt">Total Return</p>
                <p class="bg-txt">253%</p>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-col w-50">
                <p class="sm-txt">Withdraw time</p>
                <p class="bg-txt" style={{fontSize: 25, marginTop: 10}}>Any Time</p>
            </div>

            <div class="flex-col w-50">
                <p class="sm-txt">Days</p>
                <p class="bg-txt">14</p>
            </div>
        </div>

        <div class="flex-row">
            <div class="flex-col w-50">
                <p class="sm-txt">Enter Amount</p>
                <p class="bg-txt">10</p>
            </div>

            <div class="flex-col w-50">
                <p class="sm-txt">In 14 days you will get</p>
                <p class="bg-txt" style={{fontSize: 35, marginTop: 10}}>...</p>
            </div>
        </div>

        <a class="cta-fw">SATKE CAKE</a>
    </div>
  );
}

export default Card;