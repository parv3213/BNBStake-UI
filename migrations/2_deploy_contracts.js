var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var BnBStake = artifacts.require("./bnbstake.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(BnBStake);
};
