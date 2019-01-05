import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x967F272a6577b51BF1d87695532377F9d9b3827a'
);

export default instance; 