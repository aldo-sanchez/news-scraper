'use strict';

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var logger = require('morgan');
// var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

// Require Routes
var index = require('./routes/index.js');
var scrape = require('./routes/scrape.js');
var articles = require('./routes/articles.js');

// Initialize express
var app = express();

const PORT = process.env.PORT;

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Serve public folder
app.use(express.static(__dirname+'/public'));

// Add handlebars engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.use('/', index);
app.use('/', scrape);
app.use('/', articles);

// Server listener
app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});