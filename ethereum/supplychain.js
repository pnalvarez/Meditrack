import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x26eE3Bb2B064dcb117409788E320dC0745458a30'
);

export default instance; 