import React, { Component } from 'react'
import web3 from '../../ethereum/web3'

export default class InfoCards extends Component {
  render() {
    return (
      <div className="ui cards" style={{marginTop: "5%"}}>
        <div className="card" >
            <div className="content">
                <div className="header">
                    Endereço
                </div>
                <div className="description">
                   <p style = {{fontSize: "10px"}}>
                    {this.props.address}
                    </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Capacity
                </div>
                <div className="description">
                    {this.props.capacity}
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Peso Atual
                </div>
                <div className="description">
                    {this.props.currentWeight}
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                   Seu saldo
                </div>
                <div className="description">
                    {web3.utils.fromWei(this.props.balance, 'ether')} ether
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Sua Funcao 
                </div>
                <div className="description">
                    {this.props.funcao}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
