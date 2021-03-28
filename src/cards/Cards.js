import './Cards.css'
import Card from '../card/Card'
import React, { useState, useEffect } from 'react'
import { totalStaked, totalBalance } from '../utils.js'

function Cards() {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const init = async () => {
			try {
				setLoading(true)
				if (props.web3 === undefined) return
				const _totalStake = await totalStaked(props.web3)
				const _totalBalance = await totalBalance(props.web3)
				setTotalStale(_totalStake)
				setTotalBalanceOf(_totalBalance)
				setLoading(false)
			} catch (e) {
				console.error(`Error at Cards ${e.message}`)
			}
		}
		init()
	}, [props])

	return (
		<div className="Cards">
			{loading === true ? <Spinner className="text-align-center" animation="border" role="status" /> : null}
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
