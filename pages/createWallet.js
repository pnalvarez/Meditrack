import React, { Component } from 'react'
import Layout from '../components/layout'
import web3 from '../ethereum/web3'
import supplychain from '../ethereum/supplychain'
import {Message} from 'semantic-ui-react'

export default class createWallet extends Component {

  state = {
      account: '0x0',
      walletAddress: '0x0',
      maxWeight: '',
      funcao: '',
      errorMessage: ''
  }

  onSubmit = async e =>{
      e.preventDefault()

      try{
      await supplychain.methods
                        .createWallet(this.state.walletAddress,this.state.maxWeight,this.state.funcao)
                        .send({from: this.state.account})
      }catch(err){
        this.setState({errorMessage: err.message})
      }
  }

  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]
      this.setState({account})
  }
  render() {
    return (
        <Layout>
        <h3>{this.state.account}(manager) adicionando nova wallet</h3>
        <form className="ui form" onSubmit={this.onSubmit} style={{marginTop: "60px"}} error>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label>Address: </label>
                    <input type="text" onChange={(e)=>{this.setState({walletAddress: e.target.value})}} name="address" placeholder="Insert Ethereum Wallet Address"></input>
                </div>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label> Max Weight</label>
                    <input type="text" onChange={(e)=>{this.setState({maxWeight: e.target.value})}} name="id" placeholder="ID of medicine on database"></input>
                </div>
                <select onChange={(e)=>{this.setState({funcao: e.target.value})}} className="ui dropdown" style={{marginBottom: "40px"}}>
                    <option value="Productor">Productor</option>
                    <option value="Stock">Stock</option>
                    <option value="Transport">Transport</option>
                    <option value="CirurgicCenter">Cirurgic Center</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
               </select>
               {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
                <button type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</button>
        </form>
        </Layout>
    )
  }
}
