import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0xC495f8D291C7367ac4fE76DB4cdD97978e8FaC75'
);

export default instance; 