import React, { Component } from 'react'
import Layout from '../components/layout';

export default class managerHome extends Component {


  render() {
    return (
        <Layout>
            <form className="ui form">
                <div className="field">
                    <label>Id: </label>
                    <input type="text" name="id" placeholder="ID"></input>
                </div>
                <div className="field">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Name"></input>
                </div>
                <div className="field">
                  <label>Description</label>
                  <input type="text" name="description" placeholder="Description"></input>
                </div>
                <div className="field">
                  <label>Weight</label>
                  <input type="text" name="weight" placeholder="Weight"></input>
                </div>
                <div className="field">
                  <label>Value</label>
                  <input type="text" name="value" placeholder="Value"></input>
                </div>
                <button type="submit" className="ui button"></button>
            </form>
        </Layout>
    )
  }
}

