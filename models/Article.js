'use strict';
// Dependencies
var mongoose = require('mongoose');

// Create Schema class
var Schema = mongoose.Schema;

// Article Schema
var ArticleSchema = new Schema({
  // Article Title
  title: {
    type: String,
    required: true,
    unique: true
  }, 
  
  // Article link
  link: {
    type: String,
    required: true
  }
});

// Create model
var Article = mongoose.model('Article', ArticleSchema);

// Export model
module.exports = Article;