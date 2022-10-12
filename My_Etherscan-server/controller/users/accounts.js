// const { getAccount } = require("../../web3API/index.js")
const Web3 = require('web3');
const web3 = new Web3("http://127.0.0.1:7545")

module.exports = {
 
  get: (req, res) => {
    // GET https://localhost:8080/users/accounts
    async function getAccount() {
      try {
        const accounts = await web3.eth.getAccounts();
        console.log("Accounts", accounts);
        return accounts;
      } catch (err) {
        console.log(err);
        return err;
      }
    }
   
      getAccount().then(accounts => {
        res.send(accounts);
      })
  },
};




