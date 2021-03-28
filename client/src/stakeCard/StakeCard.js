import './StakeCard.css'
import React from 'react'

function StakeCard() {
	return (
		<div className="StakeCard">
			<div className="flex-row" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
				<p className="bg-txt">0.000</p>
				<p className="bg-txt">0.000</p>
			</div>
			<div className="flex-row" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
				<p className="sm-txt">CAKE</p>
				<p className="sm-txt">CAKE</p>
			</div>

			<div className="progress">
				<div className="completed sm-txt">25%</div>
			</div>
		</div>
	)
}

export default StakeCard
