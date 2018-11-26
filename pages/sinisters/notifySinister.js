import React, { Component } from 'react'
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Button, Message} from 'semantic-ui-react'
import {Router} from '../../routes'

export default class notifySinister extends Component {

  state={
    account: '0x0',
    title: '',
    description: '',
    uuid: '',
    products: [],
    productsTotal: '',
    errorMessage: '',
    loading: false
  }
  optionProducts(){
    const {products} = this.state
    console.log("products",products)
    return(
      products.map((product=>{
          return(
             <option value={product}>{product}</option>
          )
      }))
    )
  }
  onSubmit = async e=>{
    e.preventDefault()

    this.setState({loading: true, errorMessage: ''})
    const {account, title, description, uuid} = this.state

    console.log(account)

    if(title === '' || description === ''){
      this.setState({errorMessage: "Info is remaining", loading: false})
    }
    else{
    try{
      await 
        supplychain.methods.notifySinister(title,description,uuid)
        .send({from: account})
        Router.pushRoute('/')
    }catch(err){
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false})
  }
  }
  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})

      const productsTotal = await supplychain.methods.getAllProductsTotal().call()
      let products = []

      for(let i=0;i<productsTotal;i++){
        const product = await supplychain.methods.allProducts(i).call()
        const hasProduct = await supplychain.methods.walletHasProduct(accounts[0], product).call()
        const id = await supplychain.methods.getProductId(product).call()
        
        console.log("product",product)
        console.log("has product", hasProduct)
        console.log("id", id)

        if(hasProduct){
          products.push(product)
        }
      }
      this.setState({products, uuid: products[0]})
  }
  render() {
    console.log("uuid",this.state.uuid)
    return (
      <Layout>
        
        <h1>Notify Sinister</h1>
          <form onSubmit={this.onSubmit} className="ui form" style={{marginTop: "100px"}}>
            <div className="field" style={{marginTop: "40px" ,width: "180px"}}>
                    <label>Title: </label>
                    <input type="text" onChange={e=>{this.setState({title: e.target.value})}} name="title" placeholder="Insert a title for this sinister"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Description: </label>
                    <input type="text" onChange={e=>{this.setState({description: e.target.value})}} name="description" placeholder="Insert a description"></input>
            </div>
            <div className="field" style={{marginTop:"40px"}}>
                    <label>Product: </label>
                    {/* <input type="text" onChange={e=>{this.setState({uuid: e.target.value})}} name="product" placeholder="Insert the product Unique ID"></input> */}
                    <select onChange={e=>{this.setState({uuid: e.target.value})}} className="ui dropdown" name="product">
                        {this.optionProducts()}
                    </select>
            </div>
            <hr/>
              {this.state.errorMessage !== '' ? 
                    <Message negative>
                        <Message.Header>Oops, there was an error!</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message> : null}
            <Button loading={this.state.loading} content="Notify" type="submit" className="ui black button" style={{marginTop: "40px"}} />
          </form>
      </Layout>
    )
  }
}
