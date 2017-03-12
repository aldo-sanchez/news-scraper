// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

// Initialize express
var app = express();

const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// Serve public folder
app.use(express.static(__dirname+'public'));

// Test route to make sure server is working
app.get('/test', (req, res)=> {
  res.send('Just like magic')
})
app.listen(PORT, function() {
  console.log('Magic happens on port ' + PORT);
});