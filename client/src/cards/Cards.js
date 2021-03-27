import './Cards.css';
import Card from '../card/Card';
import React  from 'react';

function Cards() {
  return (
    <div className="Cards">
      <div class="flex-row">
        <div class="flex-col"><Card /></div>
        <div class="flex-col"><Card /></div>
        <div class="flex-col"><Card /></div>
      </div>
        
      <div style={{width: "100%", height: 25}}></div>

      <div class="flex-row">
        <div class="flex-col"><Card /></div>
        <div class="flex-col"><Card /></div>
        <div class="flex-col"><Card /></div>
      </div>
    </div>
  );
}

export default Cards;