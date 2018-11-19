import React, { Component } from 'react'
import Layout from '../../components/layout';
import {Button} from 'semantic-ui-react'
import supplychain from '../../ethereum/supplychain'
import {Message} from 'semantic-ui-react'

export default class trackProduct extends Component {

  state={
      account: '0x0',
      uuid1: '',
      owner1: 'Result: ',
      uuid2: '',
      owner2: '',
      dateString: '',
      errorMessage1: '',
      errorMessage2: ''
  }

  onSubmitCurrentOwner = async e=>{
    e.preventDefault()
    
    if(this.state.uuid1 !== ''){
    this.setState({errorMessage1: ''})
    const owner1 = await supplychain.methods.getProductOwner(this.state.uuid1).call()
    this.setState({owner1: "Current Owner: "+owner1})
    console.log("submit")
    }
    else{
        console.log("error")
        this.setState({errorMessage1: "Needs Info"})
    }
  }

  onSubmitTrack = async e=>{
      e.preventDefault()

      if(this.state.uuid2 !== '' && this.state.dateString !== 'Nan'){
       const dateString = this.state.dateString
       console.log("date string", Date.parse(dateString))
       const date = Date.parse(dateString) / 1000
       
       try{
       const owner2 = await supplychain.methods.trackProduct(this.state.uuid2, date).call()
       this.setState({owner2: 'Result: '+owner2})
       }catch(err){
            this.setState({errorMessage2: err.Message})
       }
      }
  }

  render() {
    return (
      <Layout>
          <h1 style={{color: "green"}}>Track Product Screen</h1>
          <div className="ui segments">
            <div className="ui green inverted segment">
                <h3>Current Owner of</h3>
                <form onSubmit={this.onSubmitCurrentOwner} className="ui form" style={{marginTop: "40px"}}>
                    <div className="field">
                        <label>Product Unique ID</label>
                        <input type="text" onChange={e=>{this.setState({uuid1: e.target.value})}} name="uuid" placeholder="Product UUID" />
                    </div>
                    <Button type="submit" className="ui button" style={{marginTop: "20px", marginLeft: "400px", width: "20%"}}>Track</Button>
                </form>
                {this.state.errorMessage1 !== '' ? 
                    <Message negative>
                        <Message.Header>Error</Message.Header>
                        <p>{this.state.errorMessage1}</p>
                    </Message>
                    : null
                }  
                <h4 style={{marginLeft: "60px"}}>{this.state.owner1}</h4>         
          </div>
            <div className="ui blue inverted segment">
                <h3>Track Product on time:</h3>
                    <form onSubmit={this.onSubmitTrack} className="ui form" style={{marginTop: "40px"}}>
                        <div className="two fields">
                            <div className="field">
                                <label>Product UUID</label>
                                <input type="text" onChange={e=>{this.setState({uuid2: e.target.value})}} placeholder="placeholder"/>
                            </div>
                            <div className="field">
                                <label>Date</label>
                                <input type="datetime-local" onChange={e=>{this.setState({dateString: e.target.value})}}/>
                            </div>
                        </div>
                        <Button type="submit" className="ui button" style={{marginTop: "60px", marginLeft: "400px", width: "20%"}}>Track</Button>
                    </form>
                    {
                        this.state.errorMessage2 !== '' ?
                            <Message negative>
                                <Message.Header>Error</Message.Header>
                                <p>{this.state.errorMessage2}</p>
                            </Message>
                            : null
                    }
                    <h4 style={{marginLeft: "60px"}}>{this.state.owner2}</h4>
                </div>
            </div>
      </Layout>
    )
  }
}
