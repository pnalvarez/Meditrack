import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xF9C09Bd41919282821FDD16d2E15b4d0DcA7b915'
);

export default instance; 