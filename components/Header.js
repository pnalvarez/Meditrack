import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class Header extends Component{

    // static async getInitialProps(){

    //     const accounts = await web3.eth.getAccounts();
    //     const manager = await supplychain.methods.manager().call();
    //     return {accounts, manager};
    // }

    render(){

        return (
            <Menu>
    
                <a className="item">
                    UserId
                </a>
                <div>
                    {this.props.user}
                </div>
    
                <Menu.Menu position="right">
                
                    <a className="item">
                        Capacity
                    </a>
    
                    <a className="item">
                        manager
                    </a>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;