'use strict';
// Dependencies
var mongoose = require('mongoose');
var Article = require('./Article.js');

mongoose.Promise = Promise;

// Mongodb connection
mongoose.connect(process.env.MONGO_URL);
var db = mongoose.connection;

// Show mongoose errors
db.on('error', (error)=>{
  console.log('Moongose error: ', error);
});

// Log success when in db
db.once('open', ()=>{
  console.log('Mongoose connection successful');
});

module.exports = function() {
  this.insertArticle = function(obj) {
    var entry = new Article({
      title: obj.title,
      link: obj.url
    });

    entry.save((err, doc)=>{
      if(err){console.log(err)}
      else{console.log(doc)};
    });
  };
};