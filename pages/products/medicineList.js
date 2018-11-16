import React, { Component } from 'react'
import Layout from '../../components/layout'
import {Button, Table} from 'semantic-ui-react'
import {Link} from '../../routes'
import supplychain from '../../ethereum/supplychain'
import MedicineRow from '../../components/MedicineRow/MedicineRow'

export default class medicineList extends Component {

  state={
      medicines: []
  }
  static async getInitialProps(){
      const medicinesTotal = await supplychain.methods.getMedicineNamesTotal().call()
      let medicines = []
      // const medicineNames = await Promise.all(
      //   Array(parseInt(medicinesTotal)).fill().map((element, index)=>{
      //     return supplychain.methods.get
      //   })
      // )
      for(let i = 0; i < medicinesTotal; i++){
        let id = await supplychain.methods.medicineNames(i).call()
         medicines.push({
              key: i,
              id: id,
              name: await supplychain.methods.getMedicineName(id).call(),
              description: await supplychain.methods.getMedicineDescription(id).call(),
              weight: await supplychain.methods.getMedicineWeight(id).call(),
              value: await supplychain.methods.getMedicineValue(id).call(),
              validity: await supplychain.methods.getMedicineValidity(id).call()
         })
      }
      return {medicinesTotal, medicines}
  }
  async componentDidMount(){

  }
  renderMedicines(){
      return(
        this.props.medicines.map((medicine=>{
            return(
              <MedicineRow key={medicine.key} id={medicine.id} name={medicine.name} description={medicine.description} value={medicine.value} weight={medicine.weight} validity={medicine.validity}/>
            )
        }))
      )
  }
  render() { 
    const {Header, Row, HeaderCell, Body} = Table
    const {medicines, medicinesTotal} = this.props
    return (
      <Layout>
          {this.props.id}
          <Table>
            <Header>
              <Row>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "darkcyan"}}>ID</HeaderCell>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "gold"}}>Name</HeaderCell>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "darkcyan"}}>Description</HeaderCell>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "gold"}}>Weight</HeaderCell>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "darkcyan"}}>Value</HeaderCell>
                <HeaderCell style={{border: "1px solid gray", backgroundColor: "gold"}}>Validity</HeaderCell>
              </Row>
            </Header>
            <Body>
                {this.renderMedicines()}
            </Body>
          </Table>
      </Layout>    
    )
  }
}
