const fs = require("fs");
var chrome = require("./chrome");
var image = "data:image/png;base64," + Buffer.from(fs.readFileSync(process.argv[2])).toString('base64');
var Tesseract = require('tesseract.js');

Tesseract.recognize(
  image,
  'eng'
).then(({ data: { text } }) => {
  console.log("Visiting: https://cutlify.seven7four4.repl.co/" + text)
  chrome.open("https://cutlify.seven7four4.repl.co/" + text);
})
