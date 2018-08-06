const https = require("https");

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, (res) => {
    res.setEncoding("utf8");

    var text = "";
    res.on('data', (data) =>{
      text += data;
    });

    res.on('end', () => {
      console.log(text);
      console.log("Response stream complete");
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);