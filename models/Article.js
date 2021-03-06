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
  }, 

  saved: {
    type: Boolean,
    default: false
  }
});

// Create model
var Article = mongoose.model('Article', ArticleSchema);

ArticleSchema.methods.saved = function() {
  this.saved = true;
  return this.saved;
};

// Export model
module.exports = Article;