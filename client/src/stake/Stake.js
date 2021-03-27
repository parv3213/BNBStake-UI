import './Stake.css';
import StakeCard from '../stakeCard/StakeCard'
import React  from 'react';

function Stake() {
  return (
    <div className="Stake">
        <h2 className="bg-txt">YOUR STAKE</h2>

        <div className="flex-row" style={{justifyContent: "space-between"}}>
            <StakeCard />
            <StakeCard />
            <StakeCard />
        </div>
    </div>
  );
}

export default Stake;