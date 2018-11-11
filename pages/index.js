import React,{ Component } from 'react';
import web3 from '../ethereum/web3';
import {Card, Button, Menu} from 'semantic-ui-react';
import supplychain from '../ethereum/supplychain.js';
import Layout from '../components/layout';
import InfoCards from '../components/InfoCards/InfoCards'

class SupplychainIndex extends Component{

    state={
        account: '0x0',
        funcao: '',
        capacity: '',
        currentWeight: '',
        sinisters: '',
        balance: '',
        receives: ''
    }

    userIsManager(){
        return(this.props.manager === this.state.account)
    }

    static async getInitialProps(){

        const manager = await supplychain.methods.manager().call();
        const func = await supplychain.methods.getWalletFunction(manager).call();
        const medicine = await supplychain.methods.getWalletMedicineQtd(manager, "id").call();
        return {manager, func, medicine};
    }

    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const funcao = await supplychain.methods.getWalletFunction(accounts[0]).call()
        const capacity = await supplychain.methods.getWalletWeight(accounts[0]).call()
        const balance = await supplychain.methods.getBalanceof(accounts[0]).call()
        const currentWeight = await supplychain.methods.getWalletCurrentWeight(accounts[0]).call()
        this.setState({account: accounts[0], funcao: funcao, capacity: capacity, balance: balance, currentWeight: currentWeight})
    }

    render(){

        return(
            <Layout>
             {this.state.account !== '0x0'?
               <div style={{alignContent: "center"}}>
                  <h1>Menu Principal</h1>
                  {this.props.manager === this.state.account ? <h2 style={{color: "blue"}}>Manager</h2> : null}
                  <h4 style = {{color: "gray", marginTop: "0px"}}>Bem vindo, usuário da carteira {this.state.account}</h4>
                  <InfoCards address = {this.state.account}
                             funcao = {this.state.funcao}
                             capacity = {this.state.capacity}
                             balance = {this.state.balance}
                             currentWeight = {this.state.currentWeight}/>         
                  <Button.Group float="right" vertical style={{marginTop: "6%", width: "25%"}}>
                    <Button content="Depósito"  icon="play" primary style={{border: "1px solid gray", marginBotton: "3px"}}/>
                    <Button content="Recibos" icon="envelope" primary style={{border: "1px solid gray", marginBotton: "3px"}}/>
                    <Button content="Sinistros" icon="bolt" primary style={{border: "1px solid gray", marginBotton: "3px"}}/>
                    {this.props.manager === this.state.account ? <Button content="Wallets" icon="address card" primary style={{border: "1px solid gray", marginBotton: "3px"}}/> : null}
                    <Button content="Alertas" icon="exclamation triangle" primary style={{border: "1px solid gray", marginBotton: "3px"}}/>
                    <Button content="Pesquisar Produto" icon="" primary/>
                  </Button.Group>
                  <hr/>
                  <Button.Group float="right" vertical style={{marginTop: "2%", width: "25%"}}>
                    {this.userIsManager() ? <div><Button content="Criar Wallet" icon="add circle" secondary/>
                                                 <Button content="Criar Medicamento" icon="add circle" secondary/>
                                                 </div> : null}
                    {this.state.funcao === "Productor"? <Button content="Gerar Produto" icon="add circle" secondary/> : null}
                    <Button content="Transferir Produto" icon="share" secondary/>   
                  </Button.Group>
              </div>        
              : 
              <div className="ui active dimmer">
                <div className="ui loader"></div>
              </div>
          
             }
            </Layout>
           
        );
    }
}

export default SupplychainIndex;