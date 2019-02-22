import React, { Component } from 'react'
import Layout from '../../components/layout';
import SinisterTable from '../../components/SinisterTable'

export default class sinisterView extends Component {
  render() {
    return (
      <Layout>
          <SinisterTable/>
      </Layout>
    )
  }
}
