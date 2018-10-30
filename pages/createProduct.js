import React, { Component } from 'react'
import Layout from '../components/layout'

export default class createProduct extends Component {

  render() {
    return (
        <Layout>
            <h1>Create Product for Manager</h1>
            <form className="ui form">
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Id: </label>
                    <input type="text" name="id" placeholder="ID"></input>
                </div>
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"></input>
                </div>
                     <div className="field" style={{marginTop: "40px"}}>
                         <label>Description</label>
                            <input type="text" name="description" placeholder="Description"></input>
                    </div>
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Weight</label>
                    <input type="text" name="weight" placeholder="Weight"></input>
                </div>
                <div className="field" style={{marginTop: "40px"}}>
                    <label>Value</label>
                    <input type="text" name="value" placeholder="Value"></input>
                </div>
                <button type="submit" className="ui positive button">Create a Kind of Medicine for your Supplychain</button>
            </form>
        </Layout>
    )
  }
}
