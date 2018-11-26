import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xa5dA4Da332CdD2417cCFb50366982Be8a7E95FE6'
);

export default instance; 