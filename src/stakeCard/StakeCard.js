import './StakeCard.css'
import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import moment from 'moment'
import { forceWithdraw } from '../utils.js'

function StakeCard(props) {
	const [spinnerLoading, setSpinnerLoading] = useState(false)

	const terminate = async () => {
		try {
			setSpinnerLoading(true)
			if (props.web3 === undefined) return
			await forceWithdraw(props.web3, props.index)
			setSpinnerLoading(false)
			window.location.reload()
		} catch (e) {
			console.error(e)
			alert(`Some error\n${e.message}`)
			setSpinnerLoading(false)
		}
	}

	return (
		<div className="StakeCard col-5 mx-auto my-2">
			<div className="ml-2">
				<div className="flex-row" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
					<p className="sm-txt">Plan {props.plan / 1 + 1}</p>
					<p className="sm-txt">{props.finish * 1000 <= new Date().getTime() ? 'Finish' : 'Active'}</p>
					<p className="sm-txt">{moment(props.start * 1000).format('DD MMM')} →</p>
				</div>
				<div className="flex-row" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
					<p className="sm-txt">{(props.percent / 10).toFixed(1)}%</p>
					<p className="sm-txt">{moment(props.finish * 1000).format('DD MMM')}</p>
				</div>
				<div className="flex-row" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
					<p className="bg-txt">{(props.amount / 1e18).toFixed(3)}</p>
					<p className="bg-txt">{(props.profit / 1e18).toFixed(3)}</p>
				</div>

				<div className="progress">
					<div
						className="progress-bar sm-txt"
						style={{
							hight: '3rem',
							width: (((new Date() / 1e3 - props.start) / (props.finish - props.start)) * 100).toFixed(2) + '%',
						}}></div>
				</div>
				<div className="d-flex justify-content-center mt-3 mb-1" style={{ justifyContent: 'space-between', padding: '0 16px' }}>
					<button className="btn btn-outline-danger btn-sm align-center" onClick={terminate}>
						Terminate {spinnerLoading === true ? <Spinner className="text-align-center mx-2" animation="border" role="status" /> : null}
					</button>
				</div>
			</div>
		</div>
	)
}

export default StakeCard
