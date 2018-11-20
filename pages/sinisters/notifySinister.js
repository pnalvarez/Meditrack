import React, { Component } from 'react'
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Button, Message} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class notifySinister extends Component {

  state={
    account: '0x0',
    title: '',
    description: '',
    uuid: '',
    errorMessage: '',
    loading: false
  }
  onSubmit = async e=>{
    e.preventDefault()

    this.setState({loading: true, errorMessage: ''})
    const {account, title, description, uuid} = this.state

    console.log(account)
    try{
      await 
        supplychain.methods.notifySinister(title,description,uuid)
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
        <h1>Notify Sinister</h1>
          <form onSubmit={this.onSubmit} className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>Title: </label>
                    <input type="text" onChange={e=>{this.setState({title: e.target.value})}} name="title" placeholder="Insert a title for this sinister"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Description: </label>
                    <input type="text" onChange={e=>{this.setState({description: e.target.value})}} name="description" placeholder="Insert a description"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Product: </label>
                    <input type="text" onChange={e=>{this.setState({uuid: e.target.value})}} name="product" placeholder="Insert the product Unique ID"></input>
            </div>
            <hr/>
              {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
            <Button loading={this.state.loading} content="Notify" type="submit" className="ui black button" style={{marginTop: "40px"}} />
          </form>
      </Layout>
    )
  }
}
