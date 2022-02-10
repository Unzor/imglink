function cutHex(h){
	return (h.charAt(0)=="#") ? h.substring(1,7):h
}

function rgbToHex(){
var rgb = Array.from(arguments).join(", ");
return '#' + rgb.split(',').map(x => (+x).toString(16).padStart(2,0)).join('')
}

function hexToRgb(h){
	return [parseInt((cutHex((h.charAt(0)=="#") ? h.substring(1,7):h)).substring(0,2),16), parseInt((cutHex((h.charAt(0)=="#") ? h.substring(1,7):h)).substring(2,4), 16), parseInt((cutHex((h.charAt(0)=="#") ? h.substring(1,7):h)).substring(4,6),16)]
}


const fetch = require('node-fetch');

async function shorten_url(u) {
 var r = await fetch("https://cutlify.seven7four4.repl.co/api/shorten", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({old: u})
});
  r = await r.json()
  return await r.url;
}

var PImage = require("pureimage")
var fs = require("fs");
const randomColor = () => {
   let color = '#';
   for (let i = 0; i < 6; i++){
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += (bit).toString(16);
   };
   return color;
};

var c = randomColor()

    var fnt = PImage.registerFont('trebuc.ttf','Trebuchet');
    fnt.load(async () => {
      var code = await shorten_url(process.argv[2]);
        var img = PImage.make(200,200);
        var ctx = img.getContext('2d');

      // fill with red
ctx.fillStyle = c;
ctx.fillRect(0,0,200,200);
           if (c.length > 7) {
c = c.slice(0, -1)
}
      var increase = 8;
        ctx.fillStyle = rgbToHex([hexToRgb(c)[0] + increase, hexToRgb(c)[1] + increase, hexToRgb(c)[2] + increase]);
        ctx.font = "17px 'Source Sans Pro'";
        ctx.fillText(code, 50, 100);

      //write to 'out.png'
PImage.encodePNGToStream(img, fs.createWriteStream(process.argv[3])).then(() => {
    console.log("wrote out the png file to " + process.argv[3] + ".png");
}).catch((e)=>{
    console.log("there was an error writing");
});
    });
