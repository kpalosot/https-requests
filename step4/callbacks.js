const https = require("https");

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, (res) => {
    res.setEncoding("utf8");

    var text = "";
    res.on('data', (data) =>{
      text += data;
    });

    res.on('end', () => {
      callback(text);
      console.log("Response stream complete");
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);