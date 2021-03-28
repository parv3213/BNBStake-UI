import React, { useState, useEffect } from 'react'
import './Hero.css'
import bckImg from '../fondo-balance.jpg'
import Spinner from 'react-bootstrap/Spinner'
import { totalStaked, totalBalance } from '../utils.js'

function Hero(props) {
	const [loading, setLoading] = useState(false)
	const [totalStake, setTotalStale] = useState(0)
	const [totalBalanceOf, setTotalBalanceOf] = useState(0)

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
				console.error(`Error at Hero ${e.message}`)
			}
		}
		init()
	}, [props])

	return (
		<div className="Hero">
			{loading === true ? <Spinner className="text-align-center" animation="border" role="status" /> : null}

			<div
				id="basic-info"
				style={{
					backgroundImage: 'url(' + bckImg + ')',
					backgroundSize: '200%',
					backgroundPosition: 'center left',
				}}>
				<p>Total income: based on your tarrif plan (from 5% to 8% daily)</p>
				<p>Basic interest rate: +0.5% every 24 hours - only for new deposits</p>
				<p>Minimal deposit: 0.05 BNB, no maximal limit</p>
				<p>
					Earnings every moment, withdraw any time (if you use capitalization of interest you can withdraw
					only after end of your deposit)
				</p>
			</div>

			<div id="balance">
				<div>
					<p className="d-flex flex-row">
						Total BNB Staked
						<div className="cta" style={{ marginLeft: 5, alignItems: 'center' }}>
							Contract
						</div>
					</p>
					<h2>{totalStake.toFixed(3)}</h2>
				</div>

				<br></br>

				<div>
					<p className="d-flex flex-row">Total Contract Balance</p>
					<h2>{totalBalanceOf.toFixed(3)}</h2>
				</div>
			</div>
		</div>
	)
}

export default Hero
