var fs = require('fs')
var path = require("path")
var Canvas = require('..')

function fontFile(name) {
  return path.join(__dirname, '/pfennigFont/', name)
}

Canvas.registerFont(fontFile('Pfennig.ttf'))
Canvas.registerFont(fontFile('PfennigBold.ttf'))
Canvas.registerFont(fontFile('PfennigItalic.ttf'))
Canvas.registerFont(fontFile('PfennigBoldItalic.ttf'))

var canvas = new Canvas(320, 320)
var ctx = canvas.getContext('2d')

ctx.font = 'normal normal 50px Helvetica'

ctx.fillText('Quo Vaids?', 0, 70)

ctx.font = 'bold 50px Pfennig'
ctx.fillText('Quo Vaids?', 0, 140)

ctx.font = 'italic 50px Pfennig'
ctx.fillText('Quo Vaids?', 0, 210)

ctx.font = 'bold italic 50px Pfennig'
ctx.fillText('Quo Vaids?', 0, 280)

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'font.png')))
