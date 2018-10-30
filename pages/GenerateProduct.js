import React, { Component } from 'react'
import Layout from '../components/layout'

export default class GenerateProduct extends Component {

  render() {
    return (
        <Layout>
        <form className="ui form">
                <div className="field" style={{marginTop: "40px"}}>
                    <label>UUID: </label>
                    <input type="text" name="uuid" placeholder="Insert an Unique ID"></input>
                </div>
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Medicine Id: </label>
                    <input type="text" name="id" placeholder="ID of medicine on database"></input>
                </div>
                <button type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</button>
        </form>
        </Layout>
    )
  }
}
