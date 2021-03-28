import './Card.css'
import React from 'react'

function Card() {
	return (
		<div className="Card">
			<div className="plan">
				<p>Plan 1</p>
			</div>

			<div className="flex-row">
				<div className="flex-col w-50">
					<p className="sm-txt">Daily Profit</p>
					<p className="bg-txt">18.1%</p>
				</div>

				<div className="flex-col w-50">
					<p className="sm-txt">Total Return</p>
					<p className="bg-txt">253%</p>
				</div>
			</div>

			<div className="flex-row">
				<div className="flex-col w-50">
					<p className="sm-txt">Withdraw time</p>
					<p className="bg-txt" style={{ fontSize: 25, marginTop: 10 }}>
						Any Time
					</p>
				</div>

				<div className="flex-col w-50">
					<p className="sm-txt">Days</p>
					<p className="bg-txt">14</p>
				</div>
			</div>

			<div className="flex-row">
				<div className="flex-col w-50">
					<p className="sm-txt">Enter Amount</p>
					<p className="bg-txt">10</p>
				</div>

				<div className="flex-col w-50">
					<p className="sm-txt">In 14 days you will get</p>
					<p className="bg-txt" style={{ fontSize: 35, marginTop: 10 }}>
						...
					</p>
				</div>
			</div>

			<a className="cta-fw">SATKE CAKE</a>
		</div>
	)
}

export default Card
