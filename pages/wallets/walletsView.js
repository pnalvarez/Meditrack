import React, { Component } from 'react'
import Layout from '../../components/layout'
import web3 from '../../ethereum/web3'
import supplychain from '../../ethereum/supplychain'
import {Button} from 'semantic-ui-react'
import WalletDisplay from '../../components/walletDisplay'

export default class walletsView extends Component {

  state={
      account: '0x0',
      walletAdress: '0x0',
      loading: false,
      maxWeight: '',
      currentWeight: '',
      creationTime: '',
      f: '',
      medicinesTotal: '0',
      medicines: [],
      medicinesQtds: []
  }
  onSubmit = async e =>{
    e.preventDefault()

    const walletAdress = this.state.walletAdress
    const maxWeight = await supplychain.methods.getWalletWeight(walletAdress).call()
    const currentWeight = await supplychain.methods.getWalletCurrentWeight(walletAdress).call()
    const creationTime = await supplychain.methods.getWalletCreationTime(walletAdress).call()
    const date = new Date(creationTime*1000)
    const creationTimeFormatted = date.toLocaleDateString("pt-BR")
    const f = await supplychain.methods.getWalletFunction(walletAdress).call()
    this.setState({maxWeight, currentWeight, creationTimeFormatted, f})
    console.log("pressionou")
  }
  async componentDidMount(){
      const accounts = await web3.eth.getAccounts()
      const medicinesTotal = await supplychain.methods.getMedicineNamesTotal().call()
      let medicines=[]
      let medicinesQtds=[]

      for(let i=0;i<medicinesTotal;i++){
        const medicineName = await supplychain.methods.medicineNames(i).call()
        medicines.push(medicineName)
        const medicineQtd = await supplychain.methods.getWalletMedicineQtd(accounts[0], medicineName).call()
        medicinesQtds.push(medicineQtd)
    }
      this.setState({account: accounts[0], medicinesTotal: medicinesTotal, medicines: medicines, medicinesQtds: medicinesQtds})
  }
  render() {
    return (
      <Layout>
          <h2 style={{color: "darkblue"}}>Search Wallet for Manager({this.state.account})</h2>
          <form onSubmit={this.onSubmit} className="ui form" style={{marginTop: "60px"}}>
                <div className="field">
                    <label>Insert a Wallet Address here: </label>
                    <input type="text" onChange={(e)=>{this.setState({walletAdress: e.target.value})}} name="wallet" placeholder="Wallet"></input>
                    <Button loading={this.state.loading} type="submit" className="ui primary button" style={{marginTop: "20px", marginLeft: "400px"}}>Search</Button>
                </div>
          </form>
          <WalletDisplay style={this.walletDisplayStyle}
                         address={this.state.walletAdress}
                         maxWeight={this.state.maxWeight}
                         currentWeight={this.state.currentWeight}
                         creationTime={this.state.creationTimeFormatted}
                         f={this.state.f}
                         medicinesTotal={this.state.medicinesTotal}
                         medicines={this.state.medicines}
                         medicinesQtds={this.state.medicinesQtds}
          />
      </Layout>
    )
  }
}
