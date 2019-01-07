import React, { Component } from 'react';
import Layout from '../../components/layout';
import supplychain from '../../ethereum/supplychain'
import web3 from '../../ethereum/web3'
import {Button} from 'semantic-ui-react'
import PathTable from '../../components/pathTable';

class paths extends Component {

    state={
        account: '0x0',
        searchedProduct: '',
        productsTotal: '',
        products: [],
        product: ''
    }
    onSubmit(){
        e.preventDefault()
        this.setState({product: this.state.searchedProduct})
    }
    async componentDidMount(){
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]
        const productsTotal = await supplychain.methods.getAllProductsTotal().call()
        let products = []

        for(let i=0;i<productsTotal;i++){
            const productId = await supplychain.methods.allProducts(i).call()
            products.push(productId)
        }
        this.setState({account,productsTotal,products})
    }
    render() {
        return (
            <Layout>
                <h2 style={{color: "darkblue"}}>Find a product path</h2>
                <form onSubmit={this.onSubmit} className="ui form" style={{marginTop: "60px"}}>
                    <div className="field">
                        <label>Insert product Id here </label>
                        <input type="text" onChange={(e)=>{this.setState({searchedProduct: e.target.value})}} name="product" placeholder="Product Unique ID"></input>
                        <Button loading={this.state.loading} type="submit" className="ui primary button" style={{marginTop: "20px", marginLeft: "400px"}}>See Path</Button>
                    </div>
                </form>
                <h1>{this.state.searchedProduct}</h1>
                <PathTable productId={this.state.searchedProduct}/>
            </Layout>
        );
    }
}

export default paths;