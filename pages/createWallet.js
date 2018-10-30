import React, { Component } from 'react'
import Layout from '../components/layout'

export default class createWallet extends Component {

  render() {
    return (
        <Layout>
        <form className="ui form" style={{marginTop: "100px"}}>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label>Address: </label>
                    <input type="text" name="address" placeholder="Insert Ethereum Wallet Address"></input>
                </div>
                <div className="field" style={{marginBottom: "40px"}}>
                    <label> Max Weight</label>
                    <input type="text" name="id" placeholder="ID of medicine on database"></input>
                </div>
                <select className="ui dropdown" style={{marginBottom: "40px"}}>
                    <option value="productor">Productor</option>
                    <option value="stock">Stock</option>
                    <option value="Transport">Transport</option>
                    <option value="cirurgic-center">Cirurgic Center</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
               </select>
             
             <hr/>
                <button type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</button>
        </form>
        </Layout>
    )
  }
}
