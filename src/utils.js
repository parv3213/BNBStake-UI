import BNBStake from './contracts/BNBStake.json'
const BMBAddress = process.env.REACT_APP_BNBAddress

const totalStaked = async (web3) => {
	const contractInstance = await contractInstanceMethod(web3)
	return (await contractInstance.methods.totalStaked().call()) / 1e18
}

const totalBalance = async (web3) => {
	return (await web3.eth.getBalance(BMBAddress)) / 1e18
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
	// console.log(web3.eth.abi.encodeParameter(['uint8']), [10])
	// const uint8 = new Uint8Array([plan])
	// return userAvailable
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

const contractInstanceMethod = async (web3) => {
	return await new web3.eth.Contract(BNBStake, BMBAddress)
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
}
