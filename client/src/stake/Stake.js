import './Stake.css';
import StakeCard from '../stakeCard/StakeCard'
import React  from 'react';

function Stake() {
  return (
    <div className="Stake">
        <h2 class="bg-txt">YOUR STAKE</h2>

        <div class="flex-row" style={{justifyContent: "space-between"}}>
            <StakeCard />
            <StakeCard />
            <StakeCard />
        </div>
    </div>
  );
}

export default Stake;