import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class ProductRow extends Component {

  state={
      dateString: ''
  }
  static propTypes={
      uuid: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
      creationTime: PropTypes.string.isRequired
  }
  checkValidity(indicator){
      if(indicator){
          return "Valid"
      }
      else{
          return "Out of validity"
      }
  }
  componentDidMount(){
      const date = new Date(this.props.creationTime*1000)
      const dateString = date.toLocaleDateString("pt-BR")
      this.setState({dateString})
  } 
  render() {
    const {Row,Cell} = Table
    const {uuid, id, name, isValid, creationTime} = this.props
    const {dateString} = this.state
    return (
      <Row>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{uuid}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{id}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{name}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{this.checkValidity(isValid)}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>{dateString}</Cell>
          <Cell style={{borderRight: "1px solid gray", borderBotton: "1px solid gray"}}>
                <Button content="See Path" icon="angle double right" primary />
          </Cell>
      </Row>
    )
  }
}
