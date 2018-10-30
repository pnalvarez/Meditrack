import React, { Component } from 'react'

class ReceiveTable extends Component {

  state={
      receives:[{
        uuid: "UUID1",
        id: "ID1",
        time: "time1",
        from: "from1",
        to: "to1"
      },
      {
        uuid: "UUID2",
        id: "ID2",
        time: "time2",
        from: "from2",
        to: "to2"
      },
      {
        uuid: "UUID3",
        id: "ID3",
        time: "time3",
        from: "from3",
        to: "to3"
      },
      {
        uuid: "UUID4",
        id: "ID4",
        time: "time4",
        from: "from4",
        to: "to4"
      }
      ] 
  }

  dataTable(){
      return(
          this.state.receives.map(receive=>{
            return(
                <tr>
                  <td data-label="UUID">{receive.uuid}</td>
                  <td data-lable="ID">{receive.id}</td>
                  <td data-label="Time">{receive.time}</td>
                  <td data-label="From">{receive.from}</td>
                  <td data-label="To">{receive.to}</td>
                </tr>
            )
          })
      )
  }
  render() {
    return (
      <div>
          <table className="ui celled table">
                <thead>
                    <th style={{backgroundColor: "darkgreen"}}>Product ID</th>
                    <th style={{backgroundColor: "darkblue"}}>Medicine ID</th>
                    <th style={{backgroundColor: "darkgreen"}}>Time</th>
                    <th style={{backgroundColor: "darkblue"}}>Origin</th>
                    <th style={{backgroundColor: "darkgreen"}}>Destiny</th>
                </thead>
                <tbody>
                  {this.dataTable()}
                </tbody>
          </table>
      </div>
    )
  }
}

export default ReceiveTable;

