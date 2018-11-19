import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'

export default class MedicineRow extends Component {
  render() {
    const {Row, Cell} = Table
    const {id, name, description, value, validity} = this.props
    return (
      <Row>
          <Cell style={{borderRight: "1px solid black", borderBotton: "1px solid black"}}>{id}</Cell>
          <Cell style={{borderRight: "1px solid black", borderBotton: "1px solid black"}}>{name}</Cell>
          <Cell style={{borderRight: "1px solid black", borderBotton: "1px solid black"}}>{description}</Cell>
          <Cell style={{borderRight: "1px solid black", borderBotton: "1px solid black"}}>{value}</Cell>
          <Cell style={{borderRight: "1px solid black", borderBotton: "1px solid black"}}>{validity}</Cell>
      </Row>
    )
  }
}
