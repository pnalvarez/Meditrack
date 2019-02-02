# Meditrack

It is a Supplychain management descentralized app(dApp) I did as my final project for college. It is focused on making the
Marine medicines Supplychain system transparent, trackable and trustless keeping its internal integrity. It uses a smart
contract as a core with all the Supplychain rules and logic I developed with the Solidity programming language. For the
front-end I did it with React(Javascript), Semantic UI and its integration with the Blockchain is made with Web3 framwork.
The tests are coded in Javascript through the Mocha framework and using Ganache as the Testing environment(it works as a testnet)

For compiling the smart contract Supplychain.sol:

-Navigate to the directory "ethereum"
--node compile.js

For deploying to the Ropsten testet(Ethereum network):

-Navigate to the directory "ethereum"
--node deploy.js

-Now you have to copy the new contract address on the Ropsten network printed o the screen and paste on the file "supplychain.js"
at the space for it

For running the contract on the Ropsten network:

--npm run dev

-And the project is running at port 3000
