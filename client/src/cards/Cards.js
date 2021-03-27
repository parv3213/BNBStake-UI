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

      <div class="flex-row">
        <div class="flex-col" style={{marginTop: 25}}><Card /></div>
        <div class="flex-col" style={{marginTop: 25}}><Card /></div>
        <div class="flex-col" style={{marginTop: 25}}><Card /></div>
      </div>
    </div>
  );
}

export default Cards;