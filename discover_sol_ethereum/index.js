const fs = require("fs");
const solc = require("solc");
const Web3 = require("web3");

const content = fs.readFileSync("HelloWorld.sol", "utf-8");

const input = {
  language: "Solidity",
  sources: {
    "HelloWorld.sol": {
      content, // the imported content
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const { HelloWorld } = output.contracts["HelloWorld.sol"];
const { abi, evm } = HelloWorld;
const contract = new web3.eth.Contract(abi);
console.log(contract);
