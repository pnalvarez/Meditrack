import React, { Component } from 'react'
import Layout from '../components/layout';

export default class buyMedicine extends Component {
  
    render() {
    return (
      <Layout>
          <h1>Buy Medicine</h1>
          <form className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>From Address: </label>
                    <input type="text" name="address" placeholder="Insert a seller address"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Medicine Unique ID: </label>
                    <input type="text" name="uuid" placeholder="Insert a medicine to buy from this seller on Supplychain"></input>
            </div>
            <hr/>
            <button type="submit" className="ui yellow button" style={{marginTop: "40px"}}>Buy Medicine</button>
          </form>
      </Layout>
    )
  }
}
