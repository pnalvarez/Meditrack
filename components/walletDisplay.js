import React, { Component } from 'react'
import PropTypes from 'prop-types'
import supplychain from '../ethereum/supplychain'

export default class walletDisplay extends Component {

 static propTypes={
      address: PropTypes.string.isRequired,
      maxWeight: PropTypes.string.isRequired,
      creationTime: PropTypes.string.isRequired,
      f: PropTypes.string.isRequired,
      medicinesTotal: PropTypes.string.isRequired,
      medicines: PropTypes.array.isRequired,
      medicinesQtds: PropTypes.array.isRequired
  }
  walletDisplayStyle={
    margin: "5em 0",
    marginLeft: "12em",
    width: "58%"
}
  headerStyle={
      marginLeft: "30%",
      color: "blue"
  }
  subHeaderStyle={
      marginLeft: "20%"
  }
  state={
        medicineNamesTotal: ''
  }

  async medicineList(){   
        return(
            this.props.medicines.map((medicine=>{
            return(
            <li>{medicine}</li>
            )
        })))
  }

  render() {
    return (
      <div className="ui card" style={this.walletDisplayStyle}>
        <div className="content">
            <div className="header" style={this.headerStyle}>Found Wallet Information</div>
        </div>
        <h4 className="ui sub header" style={this.subHeaderStyle}>Wallet</h4>
        <div className="ui small feed">
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Address: </a> {this.props.address}
                </div>
            </div>
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Max Weight: </a> {this.props.maxWeight}
                </div>
            </div>
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Creation Time: </a> {this.props.creationTime}
                </div>
            </div>
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Fuction: </a> {this.props.f}
                </div>
            </div>
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Current Weight: </a> {this.props.currentWeight}
                </div>
            </div>
            <div className="content" style={{marginBottom: "30px"}}>
                <div className="summary">
                    <a style={{fontSize: "20px"}}>Medicines: </a> 
                    <ul style={{marginLeft: "15%"}}>
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
