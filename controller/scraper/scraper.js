'use strict';
// Dependencies
var cheerio = require('cheerio');
var request = require('request');

module.exports = (res)=>{
  // Request html from El Diario de Juarez
  request('http://diario.mx', (error, response, html)=> {
    console.log('scraping this');

    // Load html
    var $ = cheerio.load(html);
    var result = [];

    // Scrape news from html
    $('.centro__nota .d__items p a').each((i, elem)=> {
      var url = $(elem).attr('href');
      var title = $(elem).text();
      var obj = {
        url: url,
        title: title
      };
      result.push(obj);
    });
    // console.log(result)
    res.send(result);
  });
};