const fs = require("fs");
const template = require("./templates")
const assets = require("./assets")

const chooseFace = () => {
  let num = Math.floor(Math.random() * assets.faces.length)
  return assets.faces[num]
}

const chooseSkinColor = () => {
  return assets.skin_colors[Math.floor(Math.random() * assets.skin_colors.length)]
}

const chooseLegoColor = () => {
  return assets.lego_colors[Math.floor(Math.random() * assets.lego_colors.length)]
}
const choosePants = () => {
  const num = Math.floor(Math.random() * assets.lego_colors.length)
  return num % 2 === 0 ? assets.jeans_color : assets.black_pants_color
}

let skin_color = chooseSkinColor();
let torso_color = chooseLegoColor();
let pants_color = choosePants();

const result = 
`
  <svg 
  id="Layer_1" 
  data-name="Layer 1" 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 240 400">
      <defs>
          <style>
              .head{fill:${skin_color};}
              .torso{fill:${torso_color};}
              .hand{fill:${skin_color};}
              .jeans-back{fill: ${pants_color[0]};}
              .jeans-front{fill: ${pants_color[1]};}
              .jeans-dark{fill: ${pants_color[2]};}
              ${assets.styles_inject}            
          </style>
      </defs>
      ${template.legs}
      ${template.torso}
      ${template.head}
      ${chooseFace()}    
  </svg>
  `;

fs.writeFile("./minifig.svg", result, (err) => {
  if (err) {
    return console.err(err);
  }
  console.log("Minifig generated");
});
