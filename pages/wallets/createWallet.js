import React, { Component } from 'react'
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Message} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class createWallet extends Component {

  state = {
      account: '0x0',
      walletAddress: '0x0',
      funcao: 'Productor',
      errorMessage: '',
      loading: false
  }

  onSubmit = async e =>{
      e.preventDefault()
    
      this.setState({loading: true, errorMessage: ''})
      try{
      await supplychain.methods
                        .createWallet(this.state.walletAddress,this.state.funcao)
                        .send({from: this.state.account})
      Router.pushRoute('/')
      }catch(err){
        this.setState({errorMessage: err.message})
      }
      this.setState({loading: false})
  }

  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]
      this.setState({account})
  }
  render() {
    return (
        <Layout>{this.state.account !== '0x0' ?
        <div>
        <h3>{this.state.account}(manager) adicionando nova wallet</h3>
        <form className="ui form" onSubmit={this.onSubmit} style={{marginTop: "60px"}} error>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label>Address: </label>
                    <div className="ui left icon input">
                        <input type="text" onChange={(e)=>{this.setState({walletAddress: e.target.value})}} name="address" placeholder="Insert Ethereum Wallet Address"></input>
                        <i className="tags icon"></i>
                    </div>
                </div>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label>Function: </label>
                    <div className="ui left icon input">
                    <select onChange={(e)=>{this.setState({funcao: e.target.value})}} className="ui dropdown" style={{marginBottom: "40px"}}>
                        <option value="Productor">Productor</option>
                        <option value="Stock">Stock</option>
                        <option value="Transport">Transport</option>
                        <option value="CirurgicCenter">Cirurgic Center</option>
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                    </div>
               </div>
               {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
                <Button type="submit" className="ui positive button" loading={this.state.loading}>Create a Kind of Medicine for your Supplychain</Button>
        </form> 
        </div> : <div className="ui active dimmer">
                <div className="ui loader"></div>
              </div>}
        </Layout>
    )
  }
}
