import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xB44447D854AAB82950C91DFeCe1C719a304D1ce3'
);

export default instance; 