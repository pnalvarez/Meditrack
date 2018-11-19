import React, { Component } from 'react'
import Layout from '../../components/layout';
import {Button, Message} from 'semantic-ui-react'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Router} from '../../routes'

export default class transferMedicine extends Component {

  state={
    account: '0x0',
    uuid: '',
    toAddress: '',
    errorMessage: '',
    loading: false
  }
  onSubmit = async e=>{
    e.preventDefault()

    this.setState({errorMessage: '', loading: true})
    const {uuid, toAddress, account} = this.state

    try{
      await supplychain.methods.transfer(uuid,toAddress)
      .send({from: account})
      Router.pushRoute('/')
    }catch(err){
        this.setState({errorMessage: err.message})
    }
        this.setState({loading: false})
  }
  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})
  }
  render() {
    return (
      <Layout>
          <h1>Transfer Medicine</h1>
          <form onSubmit={this.onSubmit} className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>Medicine Unique ID: </label>
                    <input type="text" onChange={e=>this.setState({uuid: e.target.value})} name="uuid" placeholder="Insert an Unique ID of a product that you have"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>To Address: </label>
                    <input type="text" onChange={e=>{this.setState({toAddress: e.target.value})}} name="uuid" placeholder="Insert a compatible address to receive this product"></input>
            </div>
            <hr/>
            {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
            <Button loading={this.state.loading} type="submit" className="ui teal button" style={{marginTop: "40px"}}>Transfer to this address</Button>
          </form>
      </Layout>
    )
  }
}
