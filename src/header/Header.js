import React from 'react'

import logo from '../logo.svg'
import cake from '../cake.webp'
import './Header.css'

function Header(props) {
	if (document.getElementById('web3-load-warning')) {
		return <div></div>
	}
	return (
		<div className="Header">
			<header className="Header-header">
				<div className="container">
					<div id="logo" className="flex-row">
						<img src={cake}></img>
						<p className="bg-txt">
							<span>BNB</span>Stake
						</p>
					</div>
					<div id="wallet">{props.account}</div>

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
		</div>
	)
}

export default Header
