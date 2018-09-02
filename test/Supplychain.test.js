const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledSupplychain = require('../ethereum/build/Supplychain.json');

let accounts;
let supplychain;
let supplychainAddress;

beforeEach(async () =>{

  accounts = await web3.eth.getAccounts();

  supplychain = await new web3.eth.Contract(JSON.parse(compiledSupplychain.interface))
  .deploy({data: compiledSupplychain.bytecode})
  .send({from: accounts[0], gas: '1000000'});

});

describe('Supplychain', () =>{

  it('creates a Supplychain', () =>{

    assert.ok(supplychain.options.address);
  });

});
