import React, { Component } from 'react'
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Button, Table, Tab} from 'semantic-ui-react'
import {Link} from '../../routes'
import ReceiveRow from '../../components/receiveRow'

export default class viewReceives extends Component {

  state={
      receivesQtd: '',
      account: '0x0',
      receives: []
  }
  renderReceives(){
      return(
          this.state.receives.map((receive=>{
              return(
                  <ReceiveRow key={receive.key}
                              uuid={receive.uuid}
                              id={receive.id}
                              name={receive.name}
                              timestamp={receive.timestamp}
                              from={receive.from}
                    />
              )
          }))
      )
  }
  async componentDidMount(){
      
      const accounts = await web3.eth.getAccounts()
      const receivesQtd = await supplychain.methods.getReceivesQtd(accounts[0]).call()
      let receives=[]
      this.setState({account: accounts[0], receivesQtd: receivesQtd})

      for(let i=0;i<receivesQtd;i++){

          const id = await supplychain.methods.getReceiveMedicine(i,accounts[0]).call()
          const name = await supplychain.methods.getMedicineName(id).call()
          console.log("name",name)

          receives.push({
              key: i,
              uuid: await supplychain.methods.getReceiveProduct(i,accounts[0]).call(),
              id: id,
              name: name,
              timestamp: await supplychain.methods.getReceiveTimestamp(i,accounts[0]).call(),
              from: await supplychain.methods.getReceiveFrom(i,accounts[0]).call(),
          })
      }
      this.setState({receives})
  }
  render() {
    const {Header, Row, HeaderCell, Body} = Table
    const {account, receives, receivesQtd} = this.state
    return (
      <Layout>
          {receivesQtd}
          <Table>
              <Header>
                  <Row>
                      <HeaderCell style={{backgroundColor: "#BCBB3E"}}>UUID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#BCBB3E"}}>ID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#BCBB3E"}}>Name</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#BCBB3E"}}>Timestamp</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#BCBB3E"}}>From</HeaderCell>
                  </Row>
              </Header>
              <Body>
                 {this.renderReceives()}
              </Body>
          </Table>
      </Layout>
    )
  }
}
