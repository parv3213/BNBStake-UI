import BNBStake from "./contracts/BNBStake.json";
const BMBAddress = process.env.REACT_APP_BNBAddress;
console.log(BMBAddress)

const totalStaked = async(web3) => {
    const contractInstance = await contractInstanceMethod(web3);
    return (await contractInstance.methods.totalStaked().call())/1e18
}

const totalBalance = async(web3) => {
    return (await web3.eth.getBalance(BMBAddress))/1e18
}

const findUserDownline = async(web3, account) => {
    const contractInstance = await contractInstanceMethod(web3);
    const call = await contractInstance.methods.getUserDownlineCount(account).call()
    const count = call[0]/1+call[1]/1+call[2]/1
    return (count)
}

const getUserReferralTotalBonus = async(web3, account) => {
    const contractInstance = await contractInstanceMethod(web3);
    const call = await contractInstance.methods.getUserDownlineCount(account).call()
    const count = call[0]/1+call[1]/1+call[2]/1
    return (count)
}

const contractInstanceMethod = async(web3) => {
    return await new web3.eth.Contract(BNBStake, BMBAddress);
}

export {totalStaked, contractInstanceMethod, totalBalance, findUserDownline }