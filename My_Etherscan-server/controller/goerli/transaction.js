const axios = require("axios");
require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    // GET http://localhost:8080/goerli/transaction/?transcaction=0x00

    console.log("실행")

    try { 
      const url = process.env.Infura_goerli_API;
      const transaction = req.query.transaction;

      const result = await axios({
        method: "post",
        url: url,
        header: {"Content-Type": "application/json"},
        withCredentials: true,
        data: {
          "jsonrpc":"2.0",
          "method":"eth_getTransactionByHash",
          "params": [transaction],
          "id":1}
      });
      const data = result.data.result;
      
      if(!data) throw new Error("No data");

      return res.status(200).send(data);
    } catch (err) {
      console.log(err);
      return res.status(404).send("invalid transaction!");
    }
  },
};
