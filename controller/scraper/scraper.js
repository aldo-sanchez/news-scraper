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
    var count = 0;
    // Scrape news from html
    $('.d__items p a').each((i, elem)=> {
      // Get url and title and store in obj
      var url = $(elem).attr('href');
      var title = $(elem).text();
      var obj = {
        url: url,
        title: title
      };
      count++;
      // Push obj to result array
      result.push(obj);
      
      // I find the multiple of 2 because site being scraped contains two paragraphs and links but i only need one.
      var multiple2 = count % 2;

      // Add articles to mongodb
      if(multiple2) {
        odb.insertArticle(obj, count);
      }
      
    });
    // Send result as response
    res.end();
  });
};