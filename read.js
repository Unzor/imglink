const fs = require("fs");
var { open } = require("openurl")
var image = "data:image/png;base64," + Buffer.from(fs.readFileSync(process.argv[2])).toString('base64');
var Tesseract = require('tesseract.js');

Tesseract.recognize(
  image,
  'eng'
).then(({ data: { text } }) => {
  open("https://cutlify.seven7four4.repl.co/" + text);
})
