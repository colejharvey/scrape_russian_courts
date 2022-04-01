// scrape_courts.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = 'decisions.html'

page.open('https://sudact.ru/regular/doc/?regular-txt=&regular-case_doc=&regular-lawchunkinfo=%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%20141.%20%D0%92%D0%BE%D1%81%D0%BF%D1%80%D0%B5%D0%BF%D1%8F%D1%82%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BE%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%B8%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BF%D1%80%D0%B0%D0%B2%20%D0%B8%D0%BB%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D0%B8%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B9(%D0%A3%D0%9A%20%D0%A0%D0%A4)&regular-date_from=01.01.2018&regular-date_to=&regular-workflow_stage=&regular-area=&regular-court=&regular-judge=#searchResult', function (status) {
  var content = page.content;
  fs.write(path,content,'w')
  phantom.exit();
});