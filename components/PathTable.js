import React, { Component } from 'react';
import {Button, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import supplychain from '../ethereum/supplychain'
import PathRow from './PathRow';

class pathTable extends Component {

    state={
        wallets:[],
        timestamps:[]
    }
    static propTypes = {
        productId: PropTypes.string.isRequired
    }
    renderPoint(){
        
        return(
            this.state.timestamps.map((timestamp)=>{
                return(
                    <PathRow 
                        timestamp={timestamp}
                    />
                )
            })
        )
    }
    async componentDidMount(){
        const qtd = await supplychain.methods.getProductPathLength(this.props.productId).call()
        let wallets = []
        let timestamps = []

        for(let i = 0;i < qtd; i++){
            const timestamp = await supplychain.methods.getTimestamp(this.props.productId, i).call()
            const wallet = await supplychain.methods.trackProduct(this.props.productId, timestamp).call()
            timestamps.push(timestamp)
            wallets.push(wallet)
            console.log(wallet)
            console.log(timestamp)
        }
        this.setState({wallets,timestamps})
    }
    render() {
        const {Header, Row, HeaderCell, Body} = Table
        return (
            <Table>
                <Header>
                    <Row>
                        <HeaderCell style={{backgroundColor: '#4e72ad', width: '50%'}}>Wallet</HeaderCell>
                        <HeaderCell style={{backgroundColor: '#179376', with: '50%'}}>Timestamp</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderPoint()}
                </Body>
            </Table>
        );
    }
}

export default pathTable;