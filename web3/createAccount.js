var Accounts = require('web3-eth-accounts');

const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/36977f2df84b4a2aa52fb827cc7d1b12"))

var accounts = new Accounts('ws://localhost:8546');

console.log(web3.eth.accounts.create());
