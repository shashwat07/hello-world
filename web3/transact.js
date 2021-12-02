var Accounts = require('web3-eth-accounts');

const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/36977f2df84b4a2aa52fb827cc7d1b12"))

var accounts = web3.eth.accounts.privateKeyToAccount('private key');
console.log(accounts);

web3.eth.accounts.signTransaction({
    to: 'account address',
    value: '130000000000000000',
    chainId: 4,
    gas: 400000,
}, 'private key')
.then(signed => {
    console.log(signed);
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log);
});
