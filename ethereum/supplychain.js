import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x795DB23715561e348A1ad431b2D66C34480813D4'
);

export default instance; 