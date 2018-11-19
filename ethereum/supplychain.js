import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xAc6dd0d8dfC413F19DebC0062Fa6C80f9C3748be'
);

export default instance; 