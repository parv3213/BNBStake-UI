import React, { useState, useEffect } from 'react'
import './Hero.css'
import bckImg from '../fondo-balance.jpg'
import Spinner from 'react-bootstrap/Spinner'
import { totalStaked, totalBalance } from '../utils.js'

function Hero(props) {
	const [loading, setLoading] = useState(false)
	const [totalStake, setTotalStake] = useState(0)
	const [totalBalanceOf, setTotalBalanceOf] = useState(0)

	useEffect(() => {
		const init = async () => {
			try {
				setLoading(true)
				if (props.web3 === undefined) return
				const _totalStake = await totalStaked(props.web3)
				const _totalBalance = await totalBalance(props.web3)
				setTotalStake(_totalStake)
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
			{loading === true ? <Spinner /> : null}

			<div
				id="basic-info"
				style={{
					backgroundImage: 'url(' + bckImg + ')',
					backgroundSize: '200%',
					backgroundPosition: 'center left',
				}}>
				{props.asset === 'BNB' ? ( //for BNB
					<div>
						<p>Total income: based on your tarrif plan (from 5% to 8% daily, increasing daily)</p>
						<p>Basic interest rate: +0.3% every 24 hours - only for new deposits, plan length reduces -0.25 days every day</p>
						<p>Minimal deposit: 0.05 {props.asset}, no maximal limit</p>
						<p>Earnings every moment, withdraw any time (if you use capitalization of interest you can withdraw only after end of your deposit or anytime before at 50% penalty)</p>
					</div>
				) : (
					//for BUSD
					<div>
						<p>Total income: based on your tarrif plan (from 5% to 8% daily, increasing daily)</p>
						<p>Basic interest rate: +0.3% every 24 hours - only for new deposits, plan length reduces -0.25 days every day</p>
						<p>Minimal deposit: 0.05 {props.asset}, no maximal limit</p>
						<p>Earnings every moment, withdraw any time (if you use capitalization of interest you can withdraw only after end of your deposit or anytime before at 50% penalty)</p>
					</div>
				)}
			</div>

			<div id="balance">
				<div>
					<p className="d-flex flex-row">
						Total {props.asset} Staked
						{props.asset === 'BNB' ? ( //for BNB
							<a className="btn btn-secondary btn-sm" href="https://bscscan.com/address/0xa24c2687372e94f63789c297a2e6173af8d6bfce" rel="noreferrer" style={{ marginLeft: 5, alignItems: 'center' }}>
								Contract
							</a>
						) : (
							//for BUSD
							<a className="btn btn-secondary btn-sm" href="https://bscscan.com/address/0xa24c2687372e94f63789c297a2e6173af8d6bfce" rel="noreferrer" style={{ marginLeft: 5, alignItems: 'center' }}>
								Contract
							</a>
						)}
					</p>
					<h2>{totalStake.toFixed(3)}</h2>
				</div>

				<br></br>

				<div>
					{props.asset === 'BNB' ? ( //for BNB
						<p className="d-flex flex-row">Total Contract Balance</p>
					) : (
						//for BUSD
						<p className="d-flex flex-row">Total Contract BUSD Balance</p>
					)}

					<h2>{totalBalanceOf.toFixed(3)}</h2>
				</div>
			</div>
		</div>
	)
}

export default Hero
