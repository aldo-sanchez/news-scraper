'use strict';
// Dependencies
var express = require('express');
var path = require('path');
var scraper = require('../controller/scraper/scraper.js');

// Start router
var router = express.Router();

// Route
router.get('/scraper', (req, res)=>{
  // Call scraper function and send res as argument
  scraper(res);
});

// Export router
module.exports = router;