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
                  <a className="item">Blockcine</a>
                </Link>
                <Menu.Menu position="right">
                    <Link route="/">
                        <a className="item">Products</a>
                    </Link>
                    <Link route="/createWallet">
                        <a className="item">+Wallet</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;