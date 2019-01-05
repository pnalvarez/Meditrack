import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x728D1461459dC2Cb02a45bBaFbEd18059B2DefdC'
);

export default instance; 