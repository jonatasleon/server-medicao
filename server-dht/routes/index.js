var express = require('express');
var router = express.Router();

var things = require('./things');

router.all('/things', things);

module.exports = router;
