import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Button, Table} from 'semantic-ui-react'
import {Link} from '../../routes'
import Layout from '../../components/layout'
import ProductRow from '../../components/ProductRow'

export default class deposit extends Component {

  state={
      products: [],
      productsTotal: '',
      account: '0x0'
  }
  renderProducts(){
     return(  
        this.state.products.map((product=>{
          return(
              <ProductRow key= {product.key}
                          uuid={product.uuid}
                          id={product.id}
                          name={product.name}
                          isValid={product.isValid}
                          creationTime={product.creationTime}
              />
          )
      })))
  }
   async componentDidMount(){
      const productsTotal = await supplychain.methods.getAllProductsTotal().call()
      let products = []
      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})
      console.log("account", this.state.account)

      for(let i=0;i<productsTotal;i++){
          const product = await supplychain.methods.allProducts(i).call()
          const hasProduct = await supplychain.methods.walletHasProduct(accounts[0], product).call()
          const id = await supplychain.methods.getProductId(product).call()
          const name = await supplychain.methods.getMedicineName(id).call()

          if(hasProduct){
              products.push({
                  key: i,
                  uuid: product,
                  id: id,
                  name: name,
                  owner: await supplychain.methods.getProductOwner(product).call(),
                  isValid: await supplychain.methods.getProductValid(product).call(),
                  creationTime: await supplychain.methods.getProductCreationTime(product).call()
              })
              console.log("products", products)
          }
      }
      this.setState({productsTotal, products})
  }
  render() {
    const {Header, Row, HeaderCell, Body} = Table
    const {productsTotal, products} = this.state
    return (
      <Layout>
          <Table>
              <Header>
                  <Row>
                      <HeaderCell style={{backgroundColor: "#8FE4DF"}}>UUID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#8FE4DF"}}>ID</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#8FE4DF"}}>Name</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#8FE4DF"}}>Validity</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#8FE4DF"}}>Timestamp</HeaderCell>
                      <HeaderCell style={{backgroundColor: "#3F51B5", color: "white"}}>Path</HeaderCell>
                      <HeaderCell style={{backgroundColor: "black", color: "white"}}>Throw Away</HeaderCell>
                  </Row>
              </Header>
              <Body>
                 {this.renderProducts()}
              </Body>
          </Table>
      </Layout>
    )
  }
}
