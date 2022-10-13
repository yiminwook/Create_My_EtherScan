const axios = require("axios");
const Web3 = require('web3');
const Contract = require("web3-eth-contract");
const fs = require("fs")
const path = require("path")

require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    // GET http://localhost:8080/goerli/contract/?account=0x00

    try { 
      const url = process.env.Infura_goerli_API;
      const account = req.query.account;
      const abi = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "../../ABI/helloSolidity.txt"), 
          "utf-8"
        )
      );
      Contract.setProvider(url);
      const contract = new Contract(abi, account);
      const result = await contract.methods.renderHelloWorld().call()

      return res.status(200).send({ result });
    } catch (err) {
      console.log(err);
      return res.status(404).send("invalid contract!");
    }
  },
};
