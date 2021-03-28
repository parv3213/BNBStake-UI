import React, { useState, useEffect } from 'react'
import BNBStake from './contracts/BNBStake.json'
import Web3 from 'web3'
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'
import Header from './header/Header'
import Hero from './hero/Hero'
import Cards from './cards/Cards'
import Referr from './referr/Referr'
import Stake from './stake/Stake'
import Footer from './footer/Footer'
import footerImg from './footer.png'

import logo from './logo.svg'
import cake from './cake.webp'
import './App.css'

const { REACT_APP_NETWORK_ID } = process.env

export default function App() {
	const [web3, setWeb3] = useState(undefined)
	const [account, setAccount] = useState('')
	const [accountBalance, setAccountBalance] = useState('')
	const [networkId, setNetworkId] = useState(0)
	const [metamaskChange, setMetaMaskChange] = useState(true)
	const [wrongNetwork, setWrongNetwork] = useState(false)
	// const [contractInstance, setContractInstance] = useState(undefined);
	const [refresh, setRefresh] = useState(true)
	const [loading, setLoading] = useState(true)

	const getWeb3 = () => {
		return new Promise(async (resolve, reject) => {
			if (window.ethereum) {
				const web3 = new Web3(window.ethereum)
				try {
					// await window.ethereum.send("eth_requestAccounts");
					await window.ethereum.enable()
					resolve(web3)
				} catch (e) {
					reject(e)
				}
			} else if (window.web3) {
				resolve(window.web3)
			} else {
				window.alert('Must install Metamask Extension!\nDApp will not load')
				reject('Must install Metamask Extension!')
			}
		})
	}

	useEffect(() => {
		const init = async () => {
			const web3 = await getWeb3()
			const account = (await web3.eth.getAccounts())[0]
			const networkId = await web3.eth.net.getId()
			if (networkId !== parseInt(REACT_APP_NETWORK_ID)) {
				console.log('Not correct', networkId, REACT_APP_NETWORK_ID)
				setWrongNetwork(true)
			}
			const accountBalance =
				Math.floor(parseFloat(web3.utils.fromWei(await web3.eth.getBalance(account))) * 100) / 100
			// const contractInstance = await new web3.eth.Contract(BNBStake, BMBAddress)

			setWeb3(web3)
			setAccount(account)
			setNetworkId(networkId)
			setAccountBalance(accountBalance)
			// setContractInstance(contractInstance);
		}
		setLoading(true)
		init()
		setLoading(false)
	}, [metamaskChange, refresh])

	useEffect(() => {
		window.ethereum.on('accountsChanged', () => {
			console.warn('Account changed')
			setMetaMaskChange((m) => !m)
		})
		window.ethereum.on('chainChanged', () => {
			console.warn('Chain changed')
			setMetaMaskChange((m) => !m)
		})
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<div className="container">
					<div id="logo" className="flex-row">
						<img src={cake}></img>
						<p className="bg-txt">
							<span>CAKE</span>Stake
						</p>
					</div>
					<div id="wallet">{account}</div>

					<div style={{ width: '25%' }}></div>

					<div id="cake-price" className="sm-txt">
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
			<div className="container">
				{loading === true ? <Spinner className="text-align-center" animation="border" role="status" /> : null}

				<Hero web3={web3} />
				<Cards />
				<Referr web3={web3} />
				<Stake />
				<img src={footerImg} style={{ display: 'block', margin: 'auto', marginTop: 25, width: '100%' }}></img>
				<Footer />
			</div>
		</div>
	)
}
