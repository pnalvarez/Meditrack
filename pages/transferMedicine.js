import React, { Component } from 'react'
import Layout from '../components/layout';

export default class transferMedicine extends Component {


  render() {
    return (
      <Layout>
          <h1>Transfer Medicine</h1>
          <form className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>Medicine Unique ID: </label>
                    <input type="text" name="uuid" placeholder="Insert an Unique ID of a product that you have"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>To Address: </label>
                    <input type="text" name="uuid" placeholder="Insert a compatible address to receive this product"></input>
            </div>
            <hr/>
            <button type="submit" className="ui teal button" style={{marginTop: "40px"}}>Transfer to this address</button>
          </form>
      </Layout>
    )
  }
}
