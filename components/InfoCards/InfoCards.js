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
                    Ethereum Address
                </div>
                <div className="description">
                   <p style = {{fontSize: "11px"}}>
                    {this.props.address}
                    </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                   Your Balance
                </div>
                <div className="description">
                    {web3.utils.fromWei(this.props.balance, 'ether')} ether
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Your Function on the Supply Chain
                </div>
                <div className="description">
                    {this.props.funcao}
                </div>
        </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Number of Sinisters
                </div>
                <div className="description">
                    {this.props.sinisters}
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="header">
                    Wallet Created at:
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
