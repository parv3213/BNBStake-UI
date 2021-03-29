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
							<span>BNB</span>Stake
						</p>
					</div>
					<span id="wallet" onClick={handleShow} className="ml-3">
						{props.account.slice(0, 6) + '...' + props.account.slice(-4)}
					</span>

					<div style={{ width: '25%' }}></div>

					<div id="stake-price" className="sm-txt">
						<span>1 BNB = </span>${101}
					</div>
					<div id="header-buttons" className="flex-row">
						<div className="cta">Support</div>
						<div className="cta">Telegram</div>
						<div className="cta">Audit</div>
						<div className="cta">Help</div>
						<div className="cta">Presentation</div>
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
