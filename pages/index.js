import React,{ Component } from 'react';
import web3 from '../ethereum/web3';
import {Card, Button, Menu, Container} from 'semantic-ui-react';
import supplychain from '../ethereum/supplychain.js';
import Layout from '../components/layout';
import InfoCards from '../components/InfoCards/InfoCards'
import {Link} from '../routes'

class SupplychainIndex extends Component{

    state={
        account: '0x0',
        funcao: '',
        sinisters: '',
        balance: '',
        receives: '',
        medicines: [],
        productTrace: ''
    }

    userIsManager(){
        return(this.props.manager === this.state.account)
    }

    static async getInitialProps(){

        const manager = await supplychain.methods.manager().call()
        const timestamp = await supplychain.methods.begin().call()
        const date = new Date(timestamp*1000)
        const begin = date.toLocaleDateString("pt-BR")
        const func = await supplychain.methods.getWalletFunction(manager).call();
        const medicine = await supplychain.methods.getWalletMedicineQtd(manager, "id").call();
        return {manager, func, medicine, begin};
    }

    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const funcao = await supplychain.methods.getWalletFunction(accounts[0]).call()
        const balance = await supplychain.methods.getBalanceof(accounts[0]).call()
        const productTrace = await supplychain.methods.getProductCreationTime("uuid0").call()
        const date = new Date(productTrace*1000)
        console.log("product trace",date)
        // const medicines = await supplychain.methods.medicineNames().call()
        this.setState({account: accounts[0], funcao: funcao, balance: balance, productTrace: productTrace})
    }

    render(){

        return(
            <Layout>
               {/* <h1>{this.state.medicines}</h1> */}
               <div style={{alignContent: "center"}}>
                  <h1>Menu Principal</h1>
                  {this.props.manager === this.state.account ? <h2 style={{color: "blue"}}>Manager</h2> : null}
                  <h4 style = {{color: "gray", marginTop: "0px"}}>Bem vindo, usuário da carteira {this.state.account}</h4>
                  <h5>A cadeia de suprimentos foi criada no dia {this.props.begin}</h5>
                  <InfoCards address = {this.state.account}
                             funcao = {this.state.funcao}
                             balance = {this.state.balance}
                    /> 
                  <div className="ui two column grid">   
                    <div className="row">
                      <div className="column">
                        <Button.Group float="right" vertical style={{marginTop: "6%", width: "50%", height: "50%"}}>
                            <Link route="/products/deposit"><a><Button content="Depósito"  icon="play" primary style={{border: "1px solid gray", marginBotton: "3px"}}/></a></Link>
                            <Link route="/receives/viewReceives"><a><Button content="Recibos" icon="envelope" primary style={{border: "1px solid gray", marginBotton: "3px"}}/></a></Link>
                            <Link route="/sinisters/viewSinisters"><a><Button content="Sinistros" icon="bolt" primary style={{border: "1px solid gray", marginBotton: "3px"}}/></a></Link>
                            {this.props.manager === this.state.account ? <Link route="/wallets/walletsView"><a><Button content="Pesquisar Wallet" icon="address card" primary style={{border: "1px solid gray", marginBotton: "3px"}}/></a></Link> : null}
                            <Button content="Alertas" icon="exclamation triangle" primary style={{border: "1px solid gray", marginBotton: "3px"}}/>
                            <Link route="/products/trackProduct"><a><Button content="Rastrear Produto" icon="" primary/></a></Link>
                            <Link route="/products/medicineList"><a><Button content="Catálogo de Remédios" icon="" primary/></a></Link>
                        </Button.Group>
                      </div>
                      <div className="column">
                        <Button.Group float="right" vertical style={{marginTop: "6%", width: "50%", height: "100%", marginLeft: "5%"}}>
                            {this.userIsManager() ? <div><Link route="/wallets/createWallet"><a><Button content="Criar Wallet" icon="add circle" secondary/></a></Link>
                            <Link route="/products/createProduct"><a><Button content="Criar Medicamento" icon="add circle" secondary/></a></Link>
                            </div> : null}
                            {this.state.funcao === "Productor"? <Link route="/products/GenerateProduct"><a><Button content="Gerar Produto" icon="add circle" secondary/></a></Link> : null}
                            {this.state.funcao === "Buyer"? <Link route="/buy/buyMedicine"><a><Button content="Comprar Produto" icon="cart arrow down" secondary/></a></Link> : null}
                            <Link route="/products/transferMedicine"><a><Button content="Transferir Produto" icon="share" secondary/></a></Link>
                            <Link route="/sinisters/notifySinister"><a><Button content="Notificar Sinistro" icon="exclamation" secondary/></a></Link>  
                        </Button.Group>
                        </div>
                    </div>
                  </div>
              </div>    
            </Layout>
           
        );
    }
}

export default SupplychainIndex;