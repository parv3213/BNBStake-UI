import './Cards.css'
import Card from '../card/Card'
import React from 'react'

function Cards() {
	return (
		<div className="Cards">
			<div className="flex-row">
				<div className="flex-col">
					<Card />
				</div>
				<div className="flex-col">
					<Card />
				</div>
				<div className="flex-col">
					<Card />
				</div>
			</div>

			<div className="flex-row">
				<div className="flex-col" style={{ marginTop: 25 }}>
					<Card />
				</div>
				<div className="flex-col" style={{ marginTop: 25 }}>
					<Card />
				</div>
				<div className="flex-col" style={{ marginTop: 25 }}>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Cards
