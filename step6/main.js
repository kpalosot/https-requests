const getHTML = require("./http-function");
const printUpperCase = require("./callbacks/print_uppercase");
const printLowerCase = require("./callbacks/print_lowercase");
const printReverse = require("./callbacks/print_reverse");

var requestOptionsUpper = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var requestOptionsLower = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var requestOptionsReverse = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptionsUpper, printUpperCase);
getHTML(requestOptionsLower, printLowerCase);
getHTML(requestOptionsReverse, printReverse);


