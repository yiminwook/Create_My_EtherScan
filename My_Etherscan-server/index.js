const express = require('express');
const cors = require('cors');
const usersRouter = require("./routes/user")

const app = express();

const port = 8080;

app.use( //cors설정
  cors({
    origin: ["https://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
  })
);

app.use(express.json()); //json으로 이루어진 Request Body를 받는다.
app.use('/users', usersRouter);

app.get('/gasprice', (req, res) => {
  getGasPrice().then(gasPrice => {
    res.send(gasPrice);
  })
})

app.get('/Block', (req, res) => {
  getBlock().then(block => {
    res.send(block);
  })
})

app.get('/helloworld', (req, res) => {
  helloWorld().then(result => {
    res.send(result);
  })
})

app.get('/deploy', (req, res) => {
  deploySimpleToken().then(result => {
    res.send(result)
  })
})

app.listen(port, () => {
  console.log(`Listening PORT ::: ${port}`)
})

// module.exports = server;