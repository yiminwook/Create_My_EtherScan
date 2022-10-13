const express = require('express');
const cors = require('cors');

const goerliRouter = require("./routes/goerli")
const ganacheRouter = require("./routes/ganache")

const app = express();

const port = 8080;

app.use( //cors설정
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
  })
);

app.get('/', (req, res) => {
      res.send("hello world");
  })

app.use(express.json()); //json으로 이루어진 Request Body를 받는다.

//네트워크 별로 router를 나눈다.
app.use('/goerli', goerliRouter);
//GET http://localhost:8080/goerli/balance/?account=0x00
//GET http://localhost:8080/goerli/contract/?account=0x00
//GET http://localhost:8080/goerli/transaction/?transcaction=0x00


app.use('/ganache', ganacheRouter);


// app.get('/gasprice', (req, res) => {
//   getGasPrice().then(gasPrice => {
//     res.send(gasPrice);
//   })
// })

// app.get('/Block', (req, res) => {
//   getBlock().then(block => {
//     res.send(block);
//   })
// })

// app.get('/helloworld', (req, res) => {
//   helloWorld().then(result => {
//     res.send(result);
//   })
// })

// app.get('/deploy', (req, res) => {
//   deploySimpleToken().then(result => {
//     res.send(result)
//   })
// })

app.listen(port, () => {
  console.log(`Listening PORT ::: ${port}`)
})

// module.exports = server;