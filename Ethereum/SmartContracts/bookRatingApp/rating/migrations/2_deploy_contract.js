var Ratings = artifacts.require("../contracts/Rating.sol");

module.exports = function(deployer) {
    deployer.deploy(Ratings,['Clean Code', 'Clean Architecture', 'Refactoring', 'Agile Software Development'].map(x => web3.utils.asciiToHex(x)), {gas: 6700000});
};