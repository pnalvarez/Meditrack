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

  it('manager is a productor', async () =>{

  });

  it('manager is a participant', async () =>{


  });

  it('creates a new medicine to the base which does not exist yet', async () =>{


  });

  it('cannot create a medicine that is already created', async () =>{


  });

  it('no one besides the manager can create a new kind of medicine', async () =>{


  });

  it('no one who is not productor can generate a medicine', async () =>{


  });

  it('cannot create a medicine product that does not exist', async () =>{


  });

  it('cannot create a product its code already exists', async () =>{


  });

  it('product creator has the product generated', async () =>{


  });

  it('product created successfully ', async () =>{


  });

  it('successfully designates function', async () =>{


  });

  it('successfully finds a receive that exists', async () =>{


  });

  it('successfully transfers a product between two wallets', async () =>{


  });

  it('only the product owner can send it', async () =>{


  });

  it('successfully transfers a product to another wallet', async () =>{


  });

  it('cannot buy a medicine that does not exist', async () =>{


  });

  it('cannot buy a medicine from someone that does not own it', async () =>{


  });

  it('cannot buy a medicine out of validity', async () =>{


  });

  it('successfully sends change to recipient', async () =>{

    
  });

  it('correctly checks validity', async () =>{


  });

  it('successfully notifies a sinister', async () =>{


  });

  it('successfully increments path', async () =>{


  });

  it('keeps track of a product', async () =>{


  });

});
