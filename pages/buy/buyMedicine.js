import React, { Component } from 'react'
import Layout from '../../components/layout';
import supplychain from '../../ethereum/supplychain'
import web3 from '../../ethereum/web3'
import {Message} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class buyMedicine extends Component {
  
    state={
      account: '0x0',
      from: '',
      uuid: '',
      value: '',
      errorMessage: '',
      loading: false
    }
    // getTimeUntilValidity(uuid){
    //   const id = await supplychain.methods.getProductId(uuid).call()
    //   const timestamp = new Date()
    //   const validityInterval = await supplychain.methods.getMedicineValidity(id).call()
    //   const validityDate = await supplychain.methods.getMedi
    // }
    onSubmit = async e=>{
      e.preventDefault()

      this.setState({loading: true, errorMessage: ''})
      const {account, from, uuid} = this.state

      try{
          await supplychain.methods.buyMedicine(from,uuid)
          .send({from: account, value: web3.utils.toWei(this.state.value, 'ether')})
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
          <h1>Buy Medicine</h1>
          <form className="ui form" onSubmit={this.onSubmit} style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>From Address: </label>
                    <input type="text" onChange={e=>this.setState({from: e.target.value})} name="address" placeholder="Insert a seller address"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Medicine Unique ID: </label>
                    <input type="text" onChange={e=>this.setState({uuid: e.target.value})} name="uuid" placeholder="Insert a medicine to buy from this seller on Supplychain"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Value in ether </label>
                    <input type="text" onChange={e=>this.setState({value: e.target.value})} name="value" placeholder="Insert value in ether or wei"></input>
            </div>
            <hr/>
            {this.state.errorMessage !== '' ?
              <Message negative>
                <Message.Header>Oops, there was an error!</Message.Header>
                <p>{this.state.errorMessage}</p>
              </Message> : null}
            <Button loading={this.state.loading} type="submit" className="ui yellow button" style={{marginTop: "40px"}}>Buy Medicine</Button>
          </form>
      </Layout>
    )
  }
}
