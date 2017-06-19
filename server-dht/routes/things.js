var express = require('express');
var router = express.Router();

var thingsCtrl = require('../controllers/things');

router.get('/dht', thingsCtrl.getAll);
router.post('/dht', thingsCtrl.create);

module.exports = router;
