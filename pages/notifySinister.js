import React, { Component } from 'react'
import Layout from '../components/layout';

export default class notifySinister extends Component {

  render() {
    return (
      <Layout>
        <h1>Notify Sinister</h1>
          <form className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px"}}>
                    <label>Title: </label>
                    <input type="text" name="title" placeholder="Insert a title for this sinister"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Medicine Unique ID: </label>
                    <input type="text" name="description" placeholder="Insert a description"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Product: </label>
                    <input type="text" name="product" placeholder="Insert the product Unique ID"></input>
            </div>
            <hr/>
            <button type="submit" className="ui black button" style={{marginTop: "40px"}}>Notify</button>
          </form>
      </Layout>
    )
  }
}
