import React, { Component } from 'react'

class SinisterTable extends Component {

  state={
      sinisters:[{
        key: 0,
        title: "Title1",
        description: "Description1",
        id: "id1",
        time: "time1"
      },
      {
        key: 1,
        title: "Title2",
        description: "Description2",
        id: "id2",
        time: "time2"
      },
      {
        key: 2,
        title: "Title3",
        description: "Description3",
        id: "id3",
        time: "time3"
      },
      {
        key: 3,
        title: "Title4",
        description: "Description4",
        id: "id4",
        time: "time4"
      }
      ] 
  }

  dataTable(){
      return(
          this.state.sinisters.map(sinister=>{
            return(
                <tr>
                  <td data-label="Title">{sinister.title}</td>
                  <td data-lable="Description">{sinister.description}</td>
                  <td data-label="Id">{sinister.id}</td>
                  <td data-label="Time">{sinister.time}</td>
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
                    <th style={{backgroundColor: "gold"}}>Title</th>
                    <th style={{backgroundColor: "darkcyan"}}>Description</th>
                    <th style={{backgroundColor: "gold"}}>Product Id</th>
                    <th style={{backgroundColor: "darkcyan"}}>Time</th>
                </thead>
                <tbody>
                  {this.dataTable()}
                </tbody>
          </table>
      </div>
    )
  }
}

export default SinisterTable;
