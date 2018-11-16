import React, { Component } from 'react'
import Layout from '../../components/layout'
import supplychain from '../../ethereum/supplychain'
import web3 from '../../ethereum/web3'
import {Message} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class createProduct extends Component {

  state={
      account: '0x0',
      id: '',
      name: '',
      description: '',
      weight: '',
      value: '',
      validity: '',
      errorMessage: '',
      loading: false
  }
  onSubmit = async e =>{
      e.preventDefault()
     
      this.setState({loading: true, errorMessage: ''})
      try{
      await supplychain.methods
      .medicineCreate(this.state.id,this.state.name,this.state.description,this.state.weight,this.state.value,this.state.validity)
      .send({
          from: this.state.account
      })
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
            <h1 style={{color: "darkcyan"}}>Create Product for Manager({this.state.account})</h1>
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Id: </label>
                    <input type="text" onChange={(e)=>{this.setState({id: e.target.value})}} name="id" placeholder="ID"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Name</label>
                    <input type="text" onChange={(e)=>{this.setState({name: e.target.value})}} name="name" placeholder="Name"></input>
                </div>
                     <div className="field" style={{marginTop: "20px"}}>
                         <label>Description</label>
                            <input type="text" onChange={(e)=>{this.setState({description: e.target.value})}} name="description" placeholder="Description"></input>
                    </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Weight</label>
                    <input type="text" onChange={(e)=>{this.setState({weight: e.target.value})}} name="weight" placeholder="Weight"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Value</label>
                    <input type="text" onChange={(e)=>{this.setState({value: e.target.value})}} name="value" placeholder="Value"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Validity</label>
                    <input type="text" onChange={(e)=>{this.setState({validity: e.target.value})}} name="validity" placeholder="Validity"></input>
                </div>
                <hr/>
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
