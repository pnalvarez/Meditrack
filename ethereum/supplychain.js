import web3 from './web3';
import Supplychain from './build/Supplychain.json';

const instance = new web3.eth.Contract(
    JSON.parse(Supplychain.interface),
    '0x9E98cA3C500C3F86585df1edd92bEbC72BD6d4Df'
);

export default instance; 