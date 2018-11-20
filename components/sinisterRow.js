import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Layout from './layout';

export default class sinisterRow extends Component {

  state={
      dateString: ''
  }
  static propTypes={
      uuid: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
  }
  componentDidMount(){
      const date = new Date(this.props.timestamp*1000)
      const dateString = date.toLocaleDateString("pt-BR")
      this.setState({dateString})
  }
  render() {
      const {Row, Cell} = Table
      const {uuid,id,name,title,description} = this.props
      const {dateString} = this.state
    return (
      <Row>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{uuid}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{id}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{name}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{title}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{description}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{dateString}</Cell>
      </Row>
    )
  }
}
