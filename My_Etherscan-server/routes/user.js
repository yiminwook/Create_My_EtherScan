var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

router.get('/accounts', usersController.accounts.get);

router.get('/balance', usersController.balance.get);

module.exports = router;
