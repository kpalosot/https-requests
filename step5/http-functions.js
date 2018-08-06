const https = require("https");
module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options,(res) => {
      res.setEncoding("utf8");

      var text = "";
      res.on("data", (data) => {
        text += data;
      });

      res.on("end", () => {
        callback(text);
        console.log("Response stream complete");
      });
    });
};
