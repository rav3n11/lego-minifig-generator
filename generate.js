// // const PImage = require("pureimage")
// // const Path2D = require("path2d-polyfill");
// // const fs = require('fs')

// // // make image
// // const img1 = PImage.make(100, 100)

// // // get canvas context
// // const ctx = img1.getContext('2d');

// // // fill with red
// // const p = new Path2D('M10 10 h 80 v 80 h -80 Z');

// // ctx.fillStyle = 'red';
// // // ctx.fillRect(0,0,100,100);
// // ctx.fill(p)

// // //write to 'out.png'
// // PImage.encodePNGToStream(img1, fs.createWriteStream('out.png')).then(() => {
// //     console.log("wrote out the png file to out.png");
// // }).catch((e)=>{
// //     console.log("there was an error writing");
// // });

// var Canvas = require('canvas')
// console.log('Canvas is', Canvas)
// var nodeCanvas = new Canvas(120, 120)
// var ctx = nodeCanvas.getContext('2d')

// // canvas-5-polyfill patches CanvasRenderingContext2D.prototype
// // lets give it one
// global.CanvasRenderingContext2D = {};
// global.CanvasRenderingContext2D.prototype = ctx;

// require('canvas-5-polyfill')

// // square outline
// var path1 = new Path2D();
// path1.rect(10, 10, 100, 100);
// ctx.stroke(path1);

// // black square inside
// var path2 = new Path2D();
// path2.rect(20, 20, 80, 80);
// ctx.fill(path2);

// // green circle in the center
// var path3 = new Path2D();
// path3.arc(60, 60, 30, 0, 2 * Math.PI);
// ctx.fillStyle = 'green';
// ctx.fill(path3);

// // canvas to PNG file
// var fs = require('fs')
// var out = fs.createWriteStream(__dirname + '/canvas.png');
// var stream = nodeCanvas.pngStream();

// stream.on('data', out.write.bind(out));
// stream.on('end', console.log.bind(console, 'saved png'));

const fs = require("fs");

const result = `
<svg 
id="Layer_1" 
data-name="Layer 1" 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 84.44 102.74">
    <defs>
        <style>
            .cls-1{fill:#fafafa;}
        </style></defs>
        <path 
            class="cls-1" 
            d="M310.62,362.36s4-.12,5.95.64a13.58,13.58,0,0,1,4,2.55,3.13,3.13,0,0,1,.94,2.51,41,41,0,0,1-.17,5.86c-.24,1.64.06,1.83,1.75,2.12a28.67,28.67,0,0,1,14.76,6.73,18.38,18.38,0,0,1,6,14.17c.06,12.47.21,24.95-.12,37.41-.2,7.61-3.65,12.67-11,15.8a14,14,0,0,1-3.4,1.14.89.89,0,0,0-.83,1.07c.05,2.24.06,4.47.05,6.71a.83.83,0,0,0,.69.92c.51.18,1.23.38,1.21,1.14s-.77.86-1.29,1.07c-1.9.77-4,.75-6,1-2.24.3-4.47.67-6.72.87-1.54.13-3.09.12-4.64.31-2.41.28-4.86.13-7.28.32-3.14.24-6.28-.06-9.41-.07a93.09,93.09,0,0,1-10.93-.78c-2.72-.34-5.47-.51-8.19-.89a8.52,8.52,0,0,1-3.43-1.19c-.82-.51-.78-1.17.13-1.36,2-.4,2.3-1.65,2.16-3.39a45.47,45.47,0,0,1,0-4.67c0-.69-.12-1-.91-1.22-4.78-1.27-8.93-3.54-11.7-7.85a15.75,15.75,0,0,1-2.75-8.64c0-6-.09-12,.11-18,.22-6.64.07-13.27.13-19.9a20.61,20.61,0,0,1,3.78-12,19.06,19.06,0,0,1,8.89-6.58,40.41,40.41,0,0,1,9.26-2.68c.89-.13.8-.81.82-1.35.07-1.72.14-3.44.05-5.15a5,5,0,0,1,2.89-5.19c1.51-.77,3-1.75,4.75-1.76C289.85,362.46,310.62,362.36,310.62,362.36Z" 
            transform="translate(-259.52 -362.06)"/>
</svg>
`;

fs.writeFile("./file.svg", result, (err) => {
  if (err) {
    return console.err(err);
  }
  console.log("The file was saved!");
});
