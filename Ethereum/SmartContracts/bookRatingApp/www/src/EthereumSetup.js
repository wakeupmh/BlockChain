import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bookList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"bookNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"book","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"book","type":"bytes32"}],"name":"voteForBook","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
let ratingAddress='0xDBB3989f104baBf5D475E71A1E8782Df003F92e7';

web3.eth.defaultAccount = web3.eth.accounts[0];


const ratingContract=web3.eth.contract(ratingABI).at(ratingAddress);
export {ratingContract};