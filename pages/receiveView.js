import React, { Component } from 'react'
import Layout from '../components/layout';
import ReceiveTable from '../components/ReceiveTable'

export default class receiveView extends Component {
  render() {
    return (
      <Layout>
          <h1>Your Receives</h1>
          <ReceiveTable/>
      </Layout>
    )
  }
}
