import React, { Component } from 'react';
import {Table} from 'semantic-ui-react'
import supplychain from '../ethereum/supplychain'

class PathTable extends Component {
    render() {
        const {Header, Row, HeaderCell, Body} = Table 
        return (
            <Table>
               <Header>
                    <Row>
                        <HeaderCell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray", backgroundColor: "gold"}}>Address</HeaderCell>
                        <HeaderCell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray", backgroundColor: "darkgray"}}>Function</HeaderCell>
                        <HeaderCell style = {{borderRight: "1px solid gray", borderBotton: "1px solid gray", backgroundColor: "gold"}}>Timestamp</HeaderCell>
                    </Row>
               </Header>
               <Body>
                   
               </Body>
            </Table>
        );
    }
}

export default PathTable;