import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';
import web3 from '../ethereum/web3'

export default class Layout extends Component{

  state={
      account: '0x0'
  }
  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      this.setState({account: accounts[0]})
  }
  render(){
    return(
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                
            </Head>
            <div style={{marginTop: "20px"}}>
                <Header/>
                {this.state.account !== '0x0' ? 
                <div>
                {this.props.children}</div> : <div className="ui active dimmer">
                <div className="ui loader"></div>
              </div>
                }
            </div>
        </Container>
    );
  }
}