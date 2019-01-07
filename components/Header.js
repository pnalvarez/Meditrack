import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Link} from '../routes'

class Header extends Component{

    // static async getInitialProps(){

    //     const accounts = await web3.eth.getAccounts();
    //     const manager = await supplychain.methods.manager().call();
    //     return {accounts, manager};
    // }

    render(){

        return (
            <Menu>
                <Link route="/">
                  <a className="item">Meditrack</a>
                </Link>
                <Menu.Menu position="right">
                        <a href="https://github.com/pnalvarez/Contrato-Meditrack/blob/master/Meditrack.sol" className="item">Contrato</a>            
                    <Link route="/products/trackProduct">
                        <a className="item">Rastrear</a>
                    </Link>
                    <Link route="/products/medicineList">
                        <a className="item">Catálogo</a>
                    </Link>
                    <Link route="/products/deposit">
                        <a className="item">Depósito</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;