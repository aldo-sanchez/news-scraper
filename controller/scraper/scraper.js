'use strict';
// Dependencies
var cheerio = require('cheerio');
var request = require('request');
var ODB = require('./../../models/odb.js');

var odb = new ODB();

module.exports = (res)=>{
  // Request html from El Diario de Juarez
  request('http://diario.mx', (error, response, html)=> {
    console.log('scraping this');
    // Load html
    var $ = cheerio.load(html);
    var result = [];

    // Scrape news from html
    $('.centro__nota .d__items p a').each((i, elem)=> {
      // Get url and title and store in obj
      var url = $(elem).attr('href');
      var title = $(elem).text();
      var obj = {
        url: url,
        title: title
      };
      // Push obj to result array
      result.push(obj);
      
      // Add articles to mongodb
      odb.insertArticle(obj);
    });
    // Send result as response
    res.send(result);
  });
};