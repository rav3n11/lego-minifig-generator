const fs = require("fs");
const template = require("./templates")
const assets = require("./assets")

const chooseFace = () => {
  let num = Math.floor(Math.random() * assets.faces.length)
  //Temporary solution till I add face colors
  if(num === 18) {
    skin_color = assets.skin_colors[3]
    return assets.faces[num]
  }
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

let skin_color = process.argv[0] ?? chooseSkinColor();
let torso_color = process.argv[1] ?? chooseLegoColor();
let pants_color = process.argv[2] ?? choosePants();

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
  console.log("Minifig Generated!");
});


/**
 * Let's try using a function to generate the file for us ... 
 */
module.exports = async function generateSVG(skin, torso, pants) {
  let skin_color = chooseSkinColor();
  let torso_color = chooseLegoColor();
  let pants_color = choosePants();

  console.dir({
    skin, torso, pants
  })

  const skinColor = skin ? `#${skin}` : skin_color;
  const torsoColor = torso ? `#${torso}` : torso_color;
  const pantsColor = pants ? `#${pants}` : pants_color;

  const result = `
    <svg 
    id="Layer_1" 
    data-name="Layer 1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 240 400">
        <defs>
            <style>
                .head{fill:${skinColor};}
                .torso{fill:${torsoColor};}
                .hand{fill:${skinColor};}
                .jeans-back{fill: ${pantsColor[0]};}
                .jeans-front{fill: ${pantsColor[1]};}
                .jeans-dark{fill: ${pantsColor[2]};}
                ${assets.styles_inject}            
            </style>
        </defs>
        ${template.legs}
        ${template.torso}
        ${template.head}
        ${chooseFace()}  
    </svg>
  `;

  fs.writeFileSync("./minifig.svg", result, (err) => {
    if (err) {
      return console.err(err);
    }
    console.log("Minifig Generated!");
  });
}