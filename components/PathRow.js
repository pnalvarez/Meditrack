import React, { Component } from 'react';
import {Table, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class PathRow extends Component {

    static propTypes={
        timestamp: PropTypes.string.isRequired
    }
    render() {
        const {Row, Cell} = Table
        const {timestamp} = this.props
        return (
            <Row>
                <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{timestamp}</Cell>
            </Row>
        );
    }
}

export default PathRow;