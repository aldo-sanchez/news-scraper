'use strict';
// Dependencies
var express = require('express');
var path = require('path');
var ODB = require('./../models/odb.js');

var odb = new ODB();
// Start router
var router = express.Router();

// Route
router.get('/articles', (req, res)=>{
  // Call scraper function and send res as argument
  odb.findAll(res);
});

// Export router
module.exports = router;