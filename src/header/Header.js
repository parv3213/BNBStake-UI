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

					<span style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>1 BNB = ${props.bnbPrice}</span>
					<div id="header-buttons" className="flex-row">
						<div className="cta">
							<a href="http://t.me/bfarmsupport" rel="noreferrer">
								Support
							</a>
						</div>
						<div className="cta">
							<a href="http://t.me/bfarmfinance" rel="noreferrer">
								Telegram
							</a>
						</div>
						<div className="cta">
							<a
								href="https://drive.google.com/file/d/1GPF7Da5Ru8DpfJr67kbzfLwuvI8QNA9I/view?usp=sharing"
								rel="noreferrer">
								Audit
							</a>
						</div>

						<div className="cta">
							<a
								href="https://drive.google.com/file/d/1zJ3YlovapSYVAQB6W1nPTiqfd-_09PHW/view?usp=sharing"
								rel="noreferrer">
								Presentation
							</a>
						</div>
						<div className="cta">
							<a href="https://bscscan.com/block/countdown/6130990" rel="noreferrer">
								Stake Countdown
							</a>
						</div>
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
