import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x0173d718E23121d1a2f886be31F0d8fd31103039'
);

export default instance;