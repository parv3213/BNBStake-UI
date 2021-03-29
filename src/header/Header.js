import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

// import logo from '../logo.svg'
import cake from '../cake.webp'
import './Header.css'

function Header(props) {
	const [showAddress, setShowAddress] = useState(false)

	const handleClose = () => setShowAddress(false)
	const handleShow = () => setShowAddress(true)

	if (document.getElementById('web3-load-warning')) {
		return <div></div>
	}
	return (
		<div className="Header">
			<header className="Header-header">
				<div className="container">
					<div id="logo" className="flex-row">
						<img src={cake} alt="platform-logo"></img>
						<p className="bg-txt">
							<span>B</span>Farm
						</p>
					</div>
					<span id="wallet" onClick={handleShow} className="ml-3">
						{props.account.slice(0, 6) + '...' + props.account.slice(-4)}
					</span>

					{/* <div style={{ width: '25%' }}></div> */}

					<div id="stake-price" className="sm-txt">
						<span style={{ overflow: 'hidden', 'white-space': 'nowrap' }}>1 BNB = ${101}</span>
					</div>
					<div id="header-buttons" className="flex-row">
						<a className="btn btn-primary ml-1" href="http://t.me/bfarmsupport" rel="noreferrer">
							Support
						</a>
						<a className="btn btn-primary ml-1" href="http://t.me/bfarmfinance" rel="noreferrer">
							Telegram
						</a>
						<a className="btn btn-primary ml-1" href="#" rel="noreferrer">
							Audit
						</a>
						<a
							className="btn btn-primary ml-1"
							href="https://drive.google.com/file/d/1zJ3YlovapSYVAQB6W1nPTiqfd-_09PHW/view?usp=sharing"
							rel="noreferrer">
							Presentation
						</a>
						<a
							className="btn btn-primary ml-1"
							href="https://bscscan.com/block/countdown/6130990"
							rel="noreferrer">
							Stake Countdown
						</a>
					</div>
				</div>
			</header>
			<Modal show={showAddress} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Account Address</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.account}</Modal.Body>
			</Modal>
		</div>
	)
}

export default Header
