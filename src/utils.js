import BNBStake from './contracts/BNBStake.json'
import BNBTokenStake from './contracts/BNBTokenStake.json'
import BNBOracle from './contracts/BNBOracle.json'
const BNBAddress = process.env.REACT_APP_BNBAddress
const BNBTokenAddress = process.env.REACT_APP_BNBTokenAddress

const totalStaked = async (web3) => {
	const contractInstance = await contractInstanceMethod(web3)
	return (await contractInstance.methods.totalStaked().call()) / 1e18
}

const totalBalance = async (web3) => {
	const domain = window.location.href.split('?')[0]
	if (domain.indexOf('/busd') === -1) {
		return (await web3.eth.getBalance(BNBAddress)) / 1e18
	} else {
		return (await web3.eth.getBalance(BNBTokenAddress)) / 1e18
	}
}

const findUserDownline = async (web3, account) => {
	const contractInstance = await contractInstanceMethod(web3)
	const call = await contractInstance.methods.getUserDownlineCount(account).call()
	const count = call[0] / 1 + call[1] / 1 + call[2] / 1
	return count
}

const getUserReferralAmount = async (web3, account) => {
	const contractInstance = await contractInstanceMethod(web3)
	const totalBonus = ((await contractInstance.methods.getUserReferralTotalBonus(account).call()) / 1e18).toFixed(3)
	const bonusWithdrawn = ((await contractInstance.methods.getUserReferralWithdrawn(account).call()) / 1e18).toFixed(3)
	return { totalBonus, bonusWithdrawn }
}

const getUserTotalDeposits = async (web3, account) => {
	const contractInstance = await contractInstanceMethod(web3)
	const totalDeposit = ((await contractInstance.methods.getUserTotalDeposits(account).call()) / 1e18).toFixed(3)
	return totalDeposit
}

const getUserAvailable = async (web3, account) => {
	const contractInstance = await contractInstanceMethod(web3)
	const userAvailable = ((await contractInstance.methods.getUserAvailable(account).call()) / 1e18).toFixed(3)
	return userAvailable
}

const withdraw = async (web3, account) => {
	try {
		const contractInstance = await contractInstanceMethod(web3)
		await contractInstance.methods
			.withdraw()
			.send({ from: account })
			.on('transactionHash', (transactionHash) => transactionHash)
			.on('error', (error) => error)
	} catch (e) {
		console.error(`Error at withdraw:`, e.message)
		throw e
	}
}

const getResult = async (web3, plan, deposit) => {
	try {
		const contractInstance = await contractInstanceMethod(web3)
		let { profit, current, finish } = await contractInstance.methods.getResult(plan, deposit).call()
		const totalReturn = (profit / deposit) * 100
		const days = (finish - current) / (24 * 60 * 60)
		const dailyProfit = totalReturn / days
		return { profit, totalReturn, days, dailyProfit }
	} catch (e) {
		console.log(e)
	}
}

const getUserAmountOfDeposits = async (web3) => {
	const contractInstance = await contractInstanceMethod(web3)
	const account = (await web3.eth.getAccounts())[0]
	const userAmountDeposits = (await contractInstance.methods.getUserAmountOfDeposits(account).call()) / 1
	return userAmountDeposits
}

const getUserDepositInfo = async (web3, index) => {
	try {
		const contractInstance = await contractInstanceMethod(web3)
		const account = (await web3.eth.getAccounts())[0]
		let { plan, percent, amount, profit, start, finish } = await contractInstance.methods
			.getUserDepositInfo(account, index)
			.call()
		return { plan, percent, amount, profit, start, finish }
	} catch (e) {
		console.log(e)
	}
}

const invest = async (web3, referrer, plan, value) => {
	try {
		const contractInstance = await contractInstanceMethod(web3)
		const account = (await web3.eth.getAccounts())[0]
		console.log(referrer, plan, value)
		await contractInstance.methods
			.invest(referrer, plan)
			.send({ from: account, value })
			.on('transactionHash', (transactionHash) => transactionHash)
			.on('error', (error) => error)
	} catch (e) {
		console.error(`Error at invest:`, e.message)
		throw e
	}
}

const getBNBPrice = async (web3) => {
	const networkId = await web3.eth.net.getId()
	const BNBOracleAddress =
		networkId === 56 ? '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE' : '0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526'
	const contractInstance = new web3.eth.Contract(BNBOracle, BNBOracleAddress)
	const BNBusdPrice = ((await contractInstance.methods.latestAnswer().call()) / 1e8).toFixed(0)
	return BNBusdPrice
}

const contractInstanceMethod = async (web3) => {
	const domain = window.location.href.split('?')[0]
	if (domain.indexOf('/busd') === -1) {
		return await new web3.eth.Contract(BNBStake, BNBAddress)
	} else {
		return await new web3.eth.Contract(BNBTokenStake, BNBTokenAddress)
	}
}

export {
	totalStaked,
	contractInstanceMethod,
	totalBalance,
	findUserDownline,
	getUserReferralAmount,
	getUserTotalDeposits,
	getUserAvailable,
	withdraw,
	getResult,
	invest,
	getUserAmountOfDeposits,
	getUserDepositInfo,
	getBNBPrice,
}
