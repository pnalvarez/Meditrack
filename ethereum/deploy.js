
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledSupplychain = require('./build/Supplychain.json');
const gasValue = '6721975';

const provider = new HDWalletProvider('lunar during concert behave leg praise goose rain ready bicycle dizzy twin', 'https://ropsten.infura.io/v3/65a51c67cb5c421cb28d9f46ae068dd0');

const web3 = new Web3(provider);
var block = web3.eth.getBlock("latest");
console.log("Block: " + block);
console.log("gasLimit: " + block.gasLimit);

const deploy = async () =>{

  const accounts = await web3.eth.getAccounts();

  console.log('Atempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(compiledSupplychain.interface)).deploy({data: '0x' + compiledSupplychain.bytecode}).send({ gas: gasValue, from: accounts[0]});
  console.log('Contract deployed to', result.options.address);
};

deploy();