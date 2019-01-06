import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x65451B1FF7B49A46C1274Ca40D05b5d82A68d943'
);

export default instance; 