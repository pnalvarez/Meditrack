import React, { Component } from 'react'
import Layout from '../components/layout'
import supplychain from '../ethereum/supplychain'
import web3 from '../ethereum/web3'

export default class createProduct extends Component {

  state={
      id: '',
      name: '',
      description: '',
      weight: '',
      value: '',
      validity: ''
  }
  async onSubmit(e){
      e.preventDefault()

      const accounts = await web3.eth.getAccounts()

      await supplychain.methods
      .medicineCreate(this.state.id,this.state.name,this.state.description,this.state.weight,this.state.value,this.state.validity)
      .send({
          from: accounts[0]
      })
  }

  async componentDidMount(){
    const accounts = await web3.eth.getAccounts()
    console.log("account 0", accounts[0])
    console.log("account 1", accounts[1])
  }

   render() {

    return (
        <Layout>
            <h1 style={{color: "darkcyan"}}>Create Product for Manager</h1>
            <form className="ui form">
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Id: </label>
                    <input type="text" name="id" placeholder="ID"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"></input>
                </div>
                     <div className="field" style={{marginTop: "20px"}}>
                         <label>Description</label>
                            <input type="text" name="description" placeholder="Description"></input>
                    </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Weight</label>
                    <input type="text" name="weight" placeholder="Weight"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Value</label>
                    <input type="text" name="value" placeholder="Value"></input>
                </div>
                <div className="field" style={{marginTop: "20px"}}>
                    <label>Validity</label>
                    <input type="text" name="validity" placeholder="Validity"></input>
                </div>
                <hr/>
                <button type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</button>
            </form>
        </Layout>
    )
  }
}
