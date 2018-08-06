function reverseString(html){
  var text = html.split("").reverse().join("");
  console.log(text);
}

module.exports = reverseString;