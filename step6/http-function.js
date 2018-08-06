const https = require("https");

function getHTML(option, callback){
  https.get(option, (res) => {
    res.setEncoding("utf8");

    var text = "";
    res.on('data', (data) =>{
      text += data;
    });

    res.on('end', ()=>{
      callback(text);
      console.log("Response stream ended.");
    });
  });
}



module.exports = getHTML;