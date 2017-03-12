'use strict';
// Dependencies
var express = require('express');
var path = require('path');
var scraper = require('../controller/scraper/scraper.js');

var router = express.Router();

router.get('/scraper', (req, res)=>{
  scraper(res);
  // res.end();
});

module.exports = router;