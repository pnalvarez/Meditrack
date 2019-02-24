import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x14086aDae5630965baff899FE1d03Bc6ED550668'
);

export default instance; 