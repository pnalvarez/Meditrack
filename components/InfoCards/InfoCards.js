import React, { Component } from 'react'
import web3 from '../../ethereum/web3'
import PropTypes from 'prop-types'

export default class InfoCards extends Component {

  static propTypes={
      address: PropTypes.string.isRequired,
      balance: PropTypes.string.isRequired,
      funcao: PropTypes.string.isRequired,
      sinisters: PropTypes.string.isRequired,
      creationTime: PropTypes.string.isRequired,
  }
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
        <div className="card">
            <div className="content">
                <div className="header">
                    Sinistros cadastrados
                </div>
                <div className="description">
                    {this.props.sinisters}
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Carteira criada em:
                </div>
                <div className="description">
                    {this.props.creationTime}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
