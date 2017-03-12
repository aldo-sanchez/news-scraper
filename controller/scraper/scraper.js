// Dependencies
var cheerio = require('cheerio');
var request = require('request');

request('http://diario.mx', (error, response, html)=> {
  console.log('scraping this');

  var $ = cheerio.load(html);
  var result = [];

  $('.centro__nota .d__items p a').each((i, elem)=> {
    var url = $(elem).attr('href');
    var title = $(elem).text();

    var obj = {
      url: url,
      title: title
    }
    result.push(obj);
  });
  console.log(result)
})