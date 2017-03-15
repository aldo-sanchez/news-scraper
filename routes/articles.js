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
  // find all articles
  odb.findAll(res);
});

router.post('/save/:id/:isSaved', (req, res)=>{
  var id = req.params.id;
  var isSaved = req.params.isSaved;

  // update selected article's saved property (true/false)
  odb.updateSave(id, isSaved, res);
})
// Export router
module.exports = router;