import React, { Component } from 'react';
import Layout from '../../../components/layout'
import PathTable from '../../../components/PathTable'

class productPath extends Component {
    render() {
        return (
            <Layout>
                <h2>Product Path</h2>
                <h3>Timeline for this product since creation until you</h3>
                <PathTable/>
            </Layout>
        );
    }
}

export default productPath;