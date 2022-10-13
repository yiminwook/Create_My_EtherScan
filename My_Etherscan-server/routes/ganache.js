var express = require('express');
var router = express.Router();

const { ganacheController } = require('../controller');

router.get('/accounts', ganacheController.accounts.get);

module.exports = router;
