import React,{ Component } from 'react';
import web3 from '../ethereum/web3';
import {Card, Button, Menu} from 'semantic-ui-react';
import supplychain from '../ethereum/supplychain.js';
import Layout from '../components/layout';

class SupplychainIndex extends Component{

    static async getInitialProps(){

        const manager = await supplychain.methods.manager().call();
        const func = await supplychain.methods.getWalletFunction(manager).call();
        const accounts = await web3.eth.getAccounts();
        return {manager, func, accounts};
    }

    render(){

        return(
            <div>
                {this.props.manager}
            </div>
            
        );
    }
}

export default SupplychainIndex;