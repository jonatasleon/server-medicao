var express = require('express');
var router = express.Router();

var thingsCtrl = require('../controllers/things');

router.post('/dht', thingsCtrl.dht);

module.exports = router;
