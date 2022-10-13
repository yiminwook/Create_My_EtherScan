var express = require('express');
var router = express.Router();

const { goerliController } = require('../controller');

router.get('/balance', goerliController.balance.get);
router.get('/contract', goerliController.contract.get);
router.get('/transaction', goerliController.transaction.get);

module.exports = router;
