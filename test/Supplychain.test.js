const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledSupplychain = require('../ethereum/build/Supplychain.json');

let supplychain;
let accounts;

beforeEach(async () => {

  accounts = await web3.eth.getAccounts();
  supplychain = await new web3.eth.Contract(JSON.parse(compiledSupplychain.interface))
  .deploy({data: '0x' + compiledSupplychain.bytecode})
  .send({from: accounts[0], gas: '4000000'});

});

describe('Supplychain', async () =>{

    it('creates supplychain', () =>{

      assert.ok(supplychain.options.address);
    });

    it('creates a medicine by manager', async () =>{

       let medicineName;
       let medicinedescription;
       let medicineValue;
       let medicineValidity;

       await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10)
       .send({from: accounts[0], gas: '4000000'});

       const medicineId = await supplychain.methods.medicineNames(0).call();
       medicineName = await supplychain.methods.getMedicineName(medicineId).call();
       medicinedescription = await supplychain.methods.getMedicineDescription(medicineId).call();
       medicineValue = await supplychain.methods.getMedicineValue(medicineId).call();
       medicineValidity = await supplychain.methods.getMedicineValidity(medicineId).call();

       assert.equal(medicineId, "id1");
       assert.equal(medicineName, "name");
       assert.equal(medicinedescription, "descricao");
       assert.equal(medicineValue, 10);
       assert.equal(medicineValidity, 10);
    });

    it('refuses to create a medicine by someone else than the manager', async () =>{

      try{
        await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10)
        .send({from: accounts[1], value: 0 });
        assert(false);

      }catch(err){
        assert(err);
      }
    });

    it('generates a new product  id existant by the manager', async () =>{

      await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10)
      .send({from: accounts[0], value: 0});

      await supplychain.methods.medicineGenerate("uuid1", "id1")
      .send({from: accounts[0], value: 0});

      const medicinecounter = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id1").call();
      const productExists0 = await supplychain.methods.getWalletProduct(accounts[0], "uuid1").call();
      const productExists1 = await supplychain.methods.getProductExist("uuid1").call();
      const productName = await supplychain.methods.allProducts(0).call();
      const productId = await supplychain.methods.getProductId("uuid1").call();
      const productOwner = await supplychain.methods.getProductOwner("uuid1").call();
      const productValid = await supplychain.methods.getProductValid("uuid1").call();
      const productcreationTime = await supplychain.methods.getProductCreationTime("uuid1").call();

      assert.equal(medicinecounter, 1);
      assert.equal(productExists0, true);
      assert.equal(productExists1, true);
      assert.equal(productName, "uuid1");
      assert.equal(productId, "id1");
      assert.equal(productOwner, accounts[0]);
      assert.equal(productValid, true);

    });
});
