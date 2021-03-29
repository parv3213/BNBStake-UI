import React, { useState, useEffect } from 'react'
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
import './App.css'
import { getBNBPrice } from './utils'

const { REACT_APP_NETWORK_ID } = process.env

export default function App() {
	const [web3, setWeb3] = useState(undefined)
	const [account, setAccount] = useState('')
	const [bnbPrice, setBnbPrice] = useState(0)
	const [metamaskChange, setMetaMaskChange] = useState(true)
	const [wrongNetwork, setWrongNetwork] = useState(false)
	const [loading, setLoading] = useState(true)
	const handleClose = () => {
		setMetaMaskChange(!metamaskChange)
		setWrongNetwork(false)
	}

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
				// resolve('Must install Metamask Extension!')
			}
		})
	}

	useEffect(() => {
		const init = async () => {
			const web3 = await getWeb3()
			if (web3 === undefined) return
			const account = (await web3.eth.getAccounts())[0]
			const networkId = await web3.eth.net.getId()
			if (networkId !== parseInt(REACT_APP_NETWORK_ID)) {
				console.log('Not correct', networkId, REACT_APP_NETWORK_ID)
				setWrongNetwork(true)
			}
			const bnbPrice = await getBNBPrice(web3)
			setBnbPrice(bnbPrice)
			setWeb3(web3)
			setAccount(account)
		}
		setLoading(true)
		init()
		setLoading(false)
	}, [metamaskChange])

	// useEffect(() => {
	// 	window.ethereum.on('accountsChanged', () => {
	// 		console.warn('Account changed')
	// 		setMetaMaskChange((m) => !m)
	// 	})
	// 	window.ethereum.on('chainChanged', () => {
	// 		console.warn('Chain changed')
	// 		setMetaMaskChange((m) => !m)
	// 	})
	// }, [])

	return (
		<div className="App">
			<div className="container">
				<Header account={account} bnbPrice={bnbPrice} />
				{loading === true ? <Spinner /> : null}

				<Hero web3={web3} />
				<Cards web3={web3} />
				<Referr web3={web3} />
				<Stake web3={web3} />
				<img
					src={footerImg}
					alt="footer-img"
					style={{ display: 'block', margin: 'auto', marginTop: 25, width: '100%' }}></img>
				<Footer />
				<Modal show={wrongNetwork} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Please switch to BSC Mainnet</Modal.Title>
					</Modal.Header>
					<Modal.Body>Click on metamask and change to BSC Mainnet</Modal.Body>
				</Modal>
			</div>
		</div>
	)
}
