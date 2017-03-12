'use strict';
// Dependencies
var express = require('express');
var path = require('path');

// Start router
var router = express.Router();

// Route
router.get('/', (req, res)=>{
  // Call scraper function and send res as argument
  res.render('index')
});

// Export router
module.exports = router;