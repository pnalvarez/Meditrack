import React, { Component } from 'react'
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Message} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class GenerateProduct extends Component {

  state={
      account: '0x0',
      uuid: '',
      id: '',
      loading: false,
      errorMessage: ''
  }
  onSubmit = async e =>{
      e.preventDefault()

      this.setState({loading: true, errorMessage: ''})
      const {uuid,id, account} = this.state
      try{
        await 
        supplychain.methods.medicineGenerate(uuid,id)
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
        <h1 style={{color: "green"}}>Productor Medicine Builder</h1>
        <form onSubmit={this.onSubmit} className="ui form">
                <div className="field" style={{marginTop: "40px"}}>
                    <label>UUID: </label>
                    <input type="text" name="uuid" onChange={e=>this.setState({uuid: e.target.value})} placeholder="Insert an Unique ID"></input>
                </div>
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Medicine Id: </label>
                    <input type="text" name="id" onChange={e=>this.setState({id: e.target.value})} placeholder="ID of medicine on database"></input>
                </div>
                {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
                <Button loading={this.state.loading} type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</Button>
        </form>
        </Layout>
    )
  }
}
