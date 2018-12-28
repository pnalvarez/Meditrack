import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xBDc0F5041cbd8F5Ccdb97D1D457685d66244d03B'
);

export default instance; 