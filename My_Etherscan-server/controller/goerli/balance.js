const axios = require("axios");
require('dotenv').config();

module.exports = {
  get: async (req, res) => {
    // GET http://localhost:8080/goerli/balance/?account=0x00
    console.log("실행")
    try { 
      const url = process.env.Infura_goerli_API;
      const account = req.query.account;
      const result = await axios({
        method: "post",
        url: url,
        header: {"Content-Type": "application/json"},
        withCredentials: true,
        data: {
          "jsonrpc":"2.0",
          "method":"eth_getBalance",
          "params": [account, "latest"],
          "id":1}
      });
      const balance = result.data.result;
      const decimal = parseInt(balance.toString(), 16) * Math.pow(10, -18);

      return res.status(200).send({ balance: decimal });
    } catch (err) {
      console.log(err);
      return res.status(404).send("invalid account!");
    }
  },
};
