const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledSupplychain = require('../ethereum/build/Supplychain.json');

const gasValue = '6721975';
const defaultValidity = 100000000000000000;

let supplychain;
let accounts;
let lastowner;

const normalPath = ["Productor","Transport","Stock","Seller","Buyer"];

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
          let medicineValue;
          let medicineValidity;

          await supplychain.methods.medicineCreate("id1", "Remedio1", "Descricao Remedio 1",100, defaultValidity)
          .send({from: accounts[0], value: 0, gas: gasValue});

          const medicineId = await supplychain.methods.medicineNames(0).call();
          medicineName = await supplychain.methods.getMedicineName("id1").call();
          medicinedescription = await supplychain.methods.getMedicineDescription("id1").call();
          medicineValue = await supplychain.methods.getMedicineValue("id1").call();
          medicineValidity = await supplychain.methods.getMedicineValidity("id1").call();

          assert.equal(medicineId, "id1");
          assert.equal(medicineName, "Remedio1");
          assert.equal(medicinedescription, "Descricao Remedio 1");
          assert.equal(medicineValue, 100);
          assert.equal(medicineValidity, defaultValidity);
        });

        it('does not allow anyone else to create a medicine', async () =>{

           try{
             await supplychain.methods.medicineCreate("id2", "Remedio 2", "descricao Remedio 2",0,0)
             .send({from: accounts[1], value: 0, gas: gasValue});
           }
           catch(err){
             assert(err);
           }
        });
    });

    describe('Wallet Creation', async () =>{

        it('manager can create a new wallet', async () =>{

            await supplychain.methods.createWallet(accounts[1],"Productor")
            .send({from: accounts[0], value: 0, gas: gasValue});

            const newWalletFunction = await supplychain.methods.getWalletFunction(accounts[1]).call();

            assert.equal(newWalletFunction, "Productor");
        });

        it('does not allow anyone else than manager to create a wallet', async() =>{

            try{

              await supplychain.methods.createWallet(accounts[3], 100, "Nothing")
              .send({from: accounts[2], value: 0, gas: gasValue});
            }
            catch(err){

              assert(err);
            }

        });

        it('does not allow already created wallet', async()=>{

          try{
            await supplychain.methods.createWallet(accounts[1],"Productor")
            .send({from: accounts[0], value: 0, gas: gasValue});

          }catch(err){

            assert(err);
          }
        });

    });

    describe('Product Generation', async () =>{

        before(async () =>{

          await supplychain.methods.medicineCreate("id3", "Remedio 3", "descricao Remedio 3", 10, defaultValidity)
          .send({from: accounts[0], value: 0, gas: gasValue});
        });

        it('Productor can create a new product', async () =>{

          await supplychain.methods.medicineGenerate("uuid1","id3")
          .send({from: accounts[0], value: 0, gas: gasValue});

          const medicinecounter = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id3").call();
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
          assert.equal(productId, "id3");
          assert.equal(productOwner, accounts[0]);
          assert(productValid);
        });

          it('Does not allow someone who is not product to create product', async () =>{

            try{

              await supplychain.methods.medicineGenerate("uuid2", "id3")
              .send({from: accounts[1], value: 0, gas: gasValue});


            }catch(err){

              assert(err);

            }

          });



    });

    describe('Transferance', async () =>{

      before(async()=>{

        await supplychain.methods.medicineGenerate("uuid3", "id3")
        .send({from: accounts[0], value: 0, gas: gasValue});

        await supplychain.methods.createWallet(accounts[3],"Transport")
        .send({from: accounts[0], value: 0, gas: gasValue});
      });

        it('transfers valid product from manager to Transport', async () =>{

        const qtdbefore = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id3").call();

        await supplychain.methods.transfer("uuid3", accounts[3])
        .send({from: accounts[0], value: 0, gas: gasValue});

        const removedProductFromOldWallet = await supplychain.methods.walletHasProduct(accounts[0], "uuid3").call()
        const addedProductToNewWallet = await supplychain.methods.walletHasProduct(accounts[3], "uuid3").call();
        const oldWalletmedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id3").call();
        const newWalletMedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[3], "id3").call();
        const productOwner = await supplychain.methods.getProductOwner("uuid3").call();

        assert(!removedProductFromOldWallet);
        assert(addedProductToNewWallet);
        assert.equal(oldWalletmedicineQtd, qtdbefore-1);
        assert.equal(newWalletMedicineQtd, 1);
        assert.equal(productOwner, accounts[3]);

        const receiveProduct = await supplychain.methods.getReceiveProduct(0,accounts[3]).call();
        const receiveMedicine = await supplychain.methods.getReceiveMedicine(0,accounts[3]).call();
        const receiveTimestamp = await supplychain.methods.getReceiveTimestamp(0,accounts[3]).call();
        const receiveFrom = await supplychain.methods.getReceiveFrom(0,accounts[3]).call();
        const receiveTo = await supplychain.methods.getReceiveTo(0,accounts[3]).call();

        assert.equal(receiveProduct, "uuid3");
        assert.equal(receiveMedicine, "id3");
        assert.equal(receiveFrom, accounts[0]);
        assert.equal(receiveTo, accounts[3]);

        const trackUser = await supplychain.methods.trackProduct("uuid3", receiveTimestamp).call();

        assert.equal(trackUser, accounts[0]);
        //FALTA TESTAR O INCREMENTPATH
        });

        it('Cannot transfer a product you don`t have', async () =>{

          await supplychain.methods.medicineGenerate("uuid4", "id1")
          .send({from: accounts[1], value: 0, gas: gasValue});

          try{

            await supplychain.methods.transfer("uuid4", accounts[3])
            .send({from: accounts[0], value: 0, gas: gasValue});
          }
          catch(err){

            assert(err);
          }

        });

        it('It does not allow to hurt the supplychain rules', async()=>{

          try{

            await supplychain.methods.transfer("uuid4", accounts[0])
            .send({from: accounts[1], value: 0, gas: gasValue});
          }
          catch(err){

            assert(err);
          }
        });

    });

    describe('Buy Medicine', async()=>{

      before(async()=>{

        for(let i = 0; i <= 4; i++){
          await supplychain.methods.createWallet(accounts[i+4], normalPath[i])
          .send({from: accounts[0], value: 0, gas: gasValue});
          // const x = i+4;
          // console.log("criei " + x + " " + normalPath[i]);
        }

        await supplychain.methods.medicineGenerate("uuid5", "id3")
        .send({from: accounts[4], value: 0, gas: gasValue});
        await supplychain.methods.medicineGenerate("uuid6", "id3")
        .send({from: accounts[4], value: 0, gas: gasValue});
        await supplychain.methods.medicineGenerate("uuid7", "id3")
        .send({from: accounts[4], value: 0, gas: gasValue});

        for(let i = 0; i < 3; i++){
          await supplychain.methods.transfer("uuid5", accounts[i+5])
          .send({from: accounts[i+4], value: 0, gas: gasValue});
          await supplychain.methods.transfer("uuid6", accounts[i+5])
          .send({from: accounts[i+4], value: 0, gas: gasValue});
          await supplychain.methods.transfer("uuid7", accounts[i+5])
          .send({from: accounts[i+4], value: 0, gas: gasValue});
          // const x = i+4;
          // const y = i+5;
          // console.log("passei do "+ x + " para " + y);
        }

        // await supplychain.methods.transfer("uuidd", accounts[5])
        // .send({from: accounts[4], value: 0, gas: gasValue});

        lastowner = await supplychain.methods.getOwnerof("uuid5").call();

      });

      it('last owner is the seller', async()=>{

        assert.equal(lastowner, accounts[7]);

      });

      it('buyer can buy a medicine from seller', async()=>{

        const medicineValue = await supplychain.methods.getMedicineValue("id3").call();

        const result = await supplychain.methods.walletHasProduct(accounts[7], "uuid5").call();
        console.log(result);
        console.log(accounts[7] == lastowner);

        const oldBalance = await supplychain.methods.getBalanceof(accounts[8]).call();

        const change = await supplychain.methods.buyMedicine(accounts[7], "uuid5")
        .send({from: accounts[8], value: medicineValue + 1, gas: gasValue});

        const newBalance = await supplychain.methods.getBalanceof(accounts[8]).call();

        const newowner = await supplychain.methods.getOwnerof("uuid5").call();

        assert.equal(newowner, accounts[8]);
        // assert.equal(change, 1);
        // assert.equal(oldBalance - 1, newBalance); Testar se o troco foi enviado considerando o gas
      });

      it('cannot buy a product the seller does not have', async()=>{

        try{

          const medicineValue = await supplychain.methods.getMedicineValue("id3").call();

          await supplychain.methods.buyMedicine(accounts[7], "uuid4")
          .send({from: accounts[8], value: medicineValue, gas: gasValue});

        }
        catch(err){

          assert(err);
        }

      });

      it('it does not allow to buy invalid products', async ()=>{//Testar esse

        const medicineValue = await supplychain.methods.getMedicineValue("id2").call();

        try{

          await supplychain.methods.buyMedicine(accounts[7], "uuide")
          .send({from: accounts[8], value: medicineValue, gas: gasValue});
        }
        catch(err){

          assert(err);
        }

      });

      it('only buyer can buy',async()=>{

        const medicineValue = await supplychain.methods.getMedicineValue("id3").call();

        try{

          await supplychain.methods.buyMedicine(accounts[7], "uuid6")
          .send({from: accounts[6], value: medicineValue, gas: gasValue});
        }
        catch(err){

          assert(err);
        }

      });

      it('it does not agree with the supplychain rules', async()=>{

        await supplychain.methods.medicineGenerate("uuid11", "id3")
        .send({from: accounts[0], value: 0, gas: gasValue});

        const medicineValue = await supplychain.methods.getMedicineValue("id3").call();

        try{

          await supplychain.methods.buyMedicine(accounts[4], "uui11")
          .send({from: accounts[0], value: medicineValue, gas: gasValue});

        }catch(err){

          assert(err);
        }

      });

    });

    describe('Notify Sinister', async()=>{


        before(async()=>{

          await supplychain.methods.medicineGenerate("uuid8", "id3")
          .send({from: accounts[0], value: 0, gas: gasValue});
          await supplychain.methods.medicineGenerate("uuid9", "id3")
          .send({from: accounts[0], value: 0, gas: gasValue});
        });

        it('Notifies sinister in possession of user', async()=>{

          const oldmedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id3").call();

          await supplychain.methods.notifySinister("idSinistro1","title", "description", "uuid8")
          .send({from: accounts[0], value: 0, gas: gasValue});

          const  mappingId =  await supplychain.methods.getSinisterIdMapping("idSinistro1").call()
          const arrayId = await supplychain.methods.getSinisterIdArray(0).call()
          const sinisterId = await  supplychain.methods.getSinisterId(0,accounts[0]).call()
          const sinisterTitle = await supplychain.methods.getSinisterTitle(0,accounts[0]).call();
          const sinisterDescription = await supplychain.methods.getSinisterDescription(0,accounts[0]).call();
          const sinisterResponsible = await supplychain.methods.getSinisterResponsible(0,accounts[0]).call();
          const sinisterEnvolvedProduct = await supplychain.methods.getSinisterEnvolvedProduct(0,accounts[0]).call();
          const sinisterTimestamp = await supplychain.methods.getSinisterTimestamp(0,accounts[0]).call();

          console.log('sinister id',sinisterId)
          assert.equal(sinisterId, "idSinistro1")
          assert.equal(mappingId,"idSinistro1")
          assert.equal(arrayId,"idSinistro1")
          assert.equal(sinisterTitle, "title");
          assert.equal(sinisterDescription, "description");
          assert.equal(sinisterResponsible, accounts[0]);
          assert.equal(sinisterEnvolvedProduct, "uuid8");

          const newmedicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[0], "id3").call();
          const hasProduct = await supplychain.methods.walletHasProduct(accounts[0], "uuid8").call();
          const newowner = await supplychain.methods.getOwnerof("uuid8").call();
          const exist = await supplychain.methods.getProductExist("uuid8").call();
          const searchIndex = await supplychain.methods.searchProductIndex("uuid8").call();

          assert.equal(newmedicineQtd, oldmedicineQtd-1);
          assert(!hasProduct);
          assert.equal(newowner, 0x0);
          assert(!exist);
          assert.equal(searchIndex, -1); //erro

        });

      it('Does not allow notifying sinisters not in users possession', async()=>{

          try{

            await supplychain.methods.notifySinister("idSinistro2","title", "description", "uuid9")
            .send({from: accounts[4], value: 0, gas: gasValue});

          }catch(err){

            assert(err);
          }

      });

      it('Cannot notify sinister about not existant product', async()=>{

        try{

          await supplychain.methods.notifySinister("idSinistro3","title", "description", "uuid10")
          .send({from: accounts[4], value: 0, gas: gasValue});

        }catch(err){

          assert(err);
        }

      });
    });

  });
