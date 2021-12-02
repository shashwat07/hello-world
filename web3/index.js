const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/36977f2df84b4a2aa52fb827cc7d1b12"))

web3.eth.getBalance("0x2781513D7086385a7030Ab93131d35924A3df78a", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
});

var accounts = new Accounts('ws://localhost:8546');

web3.eth.accounts.create();

console.log(accounts);
