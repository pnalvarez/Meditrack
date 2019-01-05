import React, { Component } from 'react'
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Table} from 'semantic-ui-react'
import SinisterRow from '../../components/sinisterRow'

export default class viewSinisters extends Component {

  state={
      account: '0x0',
      sinisters: [],
      sinistersQtd: ''
  }
  renderSinisters(){
      return(
      this.state.sinisters.map((sinister=>{
          return(
              <SinisterRow key={sinister.key}
                           uuid={sinister.uuid}
                           id={sinister.id}
                           name={sinister.name}
                           title={sinister.title}
                           description={sinister.description}
                           timestamp={sinister.timestamp}
              />
          )
      })))
  }
  async componentDidMount(){
       const accounts = await web3.eth.getAccounts()
       const account = accounts[0]
       const sinistersQtd = await supplychain.methods.getSinistersQtd(account).call()
       let sinisters=[]

       this.setState({account, sinistersQtd})

       for(let i=0;i<sinistersQtd;i++){
           const uuid = await supplychain.methods.getSinisterEnvolvedProduct(i, account).call()
           const id = await supplychain.methods.getProductId(uuid).call()
           const name = await supplychain.methods.getMedicineName(id).call()

           sinisters.push({
               key: i,
               uuid: uuid,
               id: id,
               name: name,
               title: await supplychain.methods.getSinisterTitle(i,account).call(),
               description: await supplychain.methods.getSinisterDescription(i,account).call(),
               timestamp: await supplychain.methods.getSinisterTimestamp(i,account).call(),
           })
       }
       this.setState({sinisters})
  }
  render() {
    const {Header, Row, HeaderCell, Body} = Table
    const {sinistersQtd} = this.state
    return (
      <Layout>
          <Table>
              <Header>
                  <Row>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>UUID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>ID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>Name</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>Title</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>Description</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#4C5D5D"}}>Timestamp</HeaderCell>
                  </Row>
              </Header>
              <Body>
                    {this.renderSinisters()}
              </Body>
          </Table>
      </Layout>
    )
  }
}
