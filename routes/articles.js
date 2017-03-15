'use strict';
// Dependencies
var express = require('express');
var path = require('path');
var ODB = require('./../models/odb.js');

var odb = new ODB();

// Start router
var router = express.Router();

// Routes

// route to get all articles in db
router.get('/articles', (req, res)=>{
  // find all articles send res as function argument to display all articles found
  odb.findAll(res);
});

router.get('/saved', (req, res)=>{
  
  // 
  odb.findSaved(res);
});

// route to save user selected article
router.post('/save_article/:id/:isSaved', (req, res)=>{
  var id = req.params.id;
  var isSaved = req.params.isSaved;

  // update selected article's saved property (true/false)
  odb.updateSave(id, isSaved, res);
});

// Export router
module.exports = router;