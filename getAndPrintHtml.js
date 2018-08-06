const https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(res){
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

getAndPrintHTML();