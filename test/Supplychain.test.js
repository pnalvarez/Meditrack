const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledSupplychain = require('../ethereum/build/Supplychain.json');

const gasValue = '6721975';

let supplychain;
let accounts;

// beforeEach(async () => {
//
//   accounts = await web3.eth.getAccounts();
//   supplychain = await new web3.eth.Contract(JSON.parse(compiledSupplychain.interface))
//   .deploy({data: '0x' + compiledSupplychain.bytecode})
//   .send({from: accounts[0], gas: '6721975'});
//
// });
//
// describe('Supplychain', async () =>{
//
//     it('creates supplychain', () =>{
//
//       assert.ok(supplychain.options.address);
//     });
//
//     it('creates a medicine by manager', async () =>{
//
//        let medicineName;
//        let medicinedescription;
//        let medicineValue;
//        let medicineValidity;
//
//        await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10, 10)
//        .send({from: accounts[0], gas: '4000000'});
//
//        const medicineId = await supplychain.methods.medicineNames(0).call();
//        medicineName = await supplychain.methods.getMedicineName(medicineId).call();
//        medicinedescription = await supplychain.methods.getMedicineDescription(medicineId).call();
//        medicineValue = await supplychain.methods.getMedicineValue(medicineId).call();
//        medicineValidity = await supplychain.methods.getMedicineValidity(medicineId).call();
//
//        assert.equal(medicineId, "id1");
//        assert.equal(medicineName, "name");
//        assert.equal(medicinedescription, "descricao");
//        assert.equal(medicineValue, 10);
//        assert.equal(medicineValidity, 10);
//     });
//
//     it('refuses to create a medicine by someone else than the manager', async () =>{
//
//       try{
//         await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10)
//         .send({from: accounts[1], value: 0 });
//         assert(false);
//
//       }catch(err){
//         assert(err);
//       }
//     });
//
//     it('creates a new wallet by manager', async () =>{
//
//        await supplychain.methods.createWallet(accounts[1], 100, "Nothing")
//        .send({from: accounts[0], value: 0, gas: '6721975'});
//
//        const newWalletWeight = await supplychain.methods.getWalletWeight(accounts[1]).call();
//        const newWalletCurrentWeight = await supplychain.methods.getWalletCurrentWeight(accounts[1]).call();
//
//        assert.equal(newWalletWeight, 100);
//        assert.equal(newWalletCurrentWeight, 0);
//     });
//
//     it('no one else than manager can create wallet', async () =>{
//
//        try{
//
//          await supplychain.methods.createWallet(accounts[1], 100, "Nothing")
//          .send({from: accounts[0], value: 0, gas: '6721975'});
//
//          assert(false);
//        }
//        catch(err){
//
//           assert(err);
//        }
//
//     });
//
//     it('generates a new product id existant by a productor', async () =>{
//
//       await supplychain.methods.medicineCreate("id1", "name", "descricao",10, 10, 10)
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.medicineGenerate("uuid1", "id1")
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       const medicinecounter = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id1").call();
//       const productExists0 = await supplychain.methods.getWalletProduct(accounts[0], "uuid1").call();
//       const productExists1 = await supplychain.methods.getProductExist("uuid1").call();
//       const productName = await supplychain.methods.allProducts(0).call();
//       const productId = await supplychain.methods.getProductId("uuid1").call();
//       const productOwner = await supplychain.methods.getProductOwner("uuid1").call();
//       const productValid = await supplychain.methods.getProductValid("uuid1").call();
//       const productcreationTime = await supplychain.methods.getProductCreationTime("uuid1").call();
//
//       assert.equal(medicinecounter, 1);
//       assert.equal(productExists0, true);
//       assert.equal(productExists1, true);
//       assert.equal(productName, "uuid1");
//       assert.equal(productId, "id1");
//       assert.equal(productOwner, accounts[0]);
//       assert.equal(productValid, true);
//
//     });
//
//     it('cannot create a product without enough capacity', async () =>{
//
//       await supplychain.methods.medicineCreate("id1", "name", "descricao",101, 10, 10)
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.createWallet(accounts[1], 100, "Productor")
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       try{
//         await supplychain.methods.medicineGenerate("uuid1", "id1")
//         .send({from: accounts[1], value: 0, gas: '6721975'});
//
//         assert(false);
//         }
//         catch(err){
//           assert(err);
//         }
//
//     });
//
//     it('cannot generate product by someone who is not productor', async () =>{
//
//       await supplychain.methods.medicineCreate("id1", "name", "descricao",10, 10, 10)
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       try{
//         await supplychain.methods.medicineGenerate("uuid1", "id1")
//         .send({from: accounts[1], value: 0, gas: '6721975'});
//
//         assert(false);
//     }
//       catch(err){
//         assert(err);
//       }
//     });
//
//     it('get respective owner of a product', async () =>{
//
//       await supplychain.methods.medicineCreate("id1", "name", "descricao",10, 10, 10)
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.medicineGenerate("uuid1", "id1")
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       const owner = await supplychain.methods.getOwnerof("uuid1").call();
//
//       assert.equal(accounts[0], owner);
//     });
//
//     it('properly transfers product', async () =>{
//
//       await supplychain.methods.medicineCreate("id1", "name", "descricao",10, 10, 10)
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.medicineGenerate("uuid1", "id1")
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.createWallet(accounts[1], 100, "Nothing")
//       .send({from: accounts[0], value: 0, gas: '6721975'});
//
//       await supplychain.methods.transfer("uuid1", accounts[1])
//       .send({from: accounts[0], value: 0, gas: gasValue});
//
//       const oldWalletProductExist = await supplychain.methods.walletHasProduct(accounts[0], "uuid1").call();
//       const oldWalletMedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id1").call();
//       const newWalletProductExist = await supplychain.methods.walletHasProduct(accounts[1], "uuid1").call();
//       const newWalletMedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[1], "id1").call();
//       const productOwner = await supplychain.methods.getProductOwner("uuid1").call();
//
//       assert(!oldWalletProductExist);
//       assert(newWalletProductExist);
//       assert.equal(oldWalletMedicineQtd, 0);
//       assert.equal(newWalletMedicineQtd, 1);
//       assert.equal(productOwner, accounts[1]);
//     });
// });
//
// describe('Medicine Type creation', async () =>{
//
//
// });
//
// describe('Product generation')


  describe('Supplychain', async () =>{

    before(async () =>{

       accounts = await web3.eth.getAccounts();

       supplychain = await new web3.eth.Contract(JSON.parse(compiledSupplychain.interface))
       .deploy({data: '0x' + compiledSupplychain.bytecode})
       .send({from: accounts[0], gas: gasValue});
    });

    it('creates supplychain', async () =>{
      assert.ok(supplychain.options.address);
    })

    describe('Medicine Creation', async () =>{

        it('creates medicine by manager', async () =>{

          let medicineName;
          let medicinedescription;
          let medicineWeight;
          let medicineValue;
          let medicineValidity;

          await supplychain.methods.medicineCreate("id1", "name", "descricao", 10, 10, 10)
          .send({from: accounts[0], value: 0, gas: gasValue});

          const medicineId = await supplychain.methods.medicineNames(0).call();
          medicineName = await supplychain.methods.getMedicineName("id1").call();
          medicinedescription = await supplychain.methods.getMedicineDescription("id1").call();
          medicineWeight = await supplychain.methods.getMedicineWeight("id1").call();
          medicineValue = await supplychain.methods.getMedicineValue("id1").call();
          medicineValidity = await supplychain.methods.getMedicineValidity("id1").call();

          assert.equal(medicineId, "id1");
          assert.equal(medicineName, "name");
          assert.equal(medicinedescription, "descricao");
          assert.equal(medicineWeight, 10);
          assert.equal(medicineValue, 10);
          assert.equal(medicineValidity, 10);
        });

        it('does not allow anyone else to create a medicine', async () =>{

           try{
             await supplychain.methods.medicineCreate("id1", "name", "descricao",0,0,0)
             .send({from: accounts[1], value: 0, gas: gasValue});

             assert(false);
           }
           catch(err){
             assert(err);
           }
        });
    });

    describe('Wallet Creation', async () =>{

        it('manager can create a new wallet', async () =>{

            await supplychain.methods.createWallet(accounts[1], 100, "Productor")
            .send({from: accounts[0], value: 0, gas: gasValue});

            const newWalletFunction = await supplychain.methods.getWalletFunction(accounts[1]).call();
            const newWalletWeight = await supplychain.methods.getWalletWeight(accounts[1]).call();
            const newWalletCurrentWeight = await supplychain.methods.getWalletCurrentWeight(accounts[1]).call();

            assert.equal(newWalletWeight, 100);
            assert.equal(newWalletFunction, "Productor");
            assert.equal(newWalletCurrentWeight, 0);
        });

        it('does not allow anyone else than manager to create a wallet', async() =>{

            try{

              await supplychain.methods.createWallet(accounts[2], 100, "Nothing")
              .send({from: accounts[0], value: 0, gas: gasValue});
            }
            catch(err){

              assert(err);
            }

        });

        it('does not allow already created wallet', async()=>{

          try{
            await supplychain.methods.createWallet(accounts[1], 100, "Productor")
            .send({from: accounts[0], value: 0, gas: gasValue});

          }catch(err){

            assert(err);
          }
        });

    });

    describe('Product Generation', async () =>{

        before(async () =>{

          await supplychain.methods.medicineCreate("id2", "name", "descricao", 10, 10, 10)
          .send({from: accounts[0], value: 0, gas: gasValue});
        });

        it('Productor can create a new product', async () =>{

          await supplychain.methods.medicineGenerate("uuid1","id1")
          .send({from: accounts[0], value: 0, gas: gasValue});

          const medicinecounter = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id1").call();
          const productExists0 = await supplychain.methods.walletHasProduct(accounts[0], "uuid1").call();
          const productExists1 = await supplychain.methods.getProductExist("uuid1").call();
          const productName = await supplychain.methods.allProducts(0).call();
          const productId = await supplychain.methods.getProductId("uuid1").call();
          const productOwner = await supplychain.methods.getProductOwner("uuid1").call();
          const productValid = await supplychain.methods.getProductValid("uuid1").call();
          const productcreationTime = await supplychain.methods.getProductCreationTime("uuid1").call();

          assert.equal(medicinecounter, 1);
          assert(productExists0);
          assert(productExists1);
          assert.equal(productName, "uuid1");
          assert.equal(productId, "id1");
          assert.equal(productOwner, accounts[0]);
          assert(productValid);
        });

          it('Does not allow someone who is not product to create product', async () =>{

            try{

              await supplychain.methods.medicineGenerate("uuid2", "id1")
              .send({from: accounts[1], value: 0, gas: gasValue});


            }catch(err){

              assert(err);

            }

          });



    });

  });
