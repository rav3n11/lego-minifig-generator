const fs = require("fs");
const template = require("./templates")
const styles = require("./styles")


let head_color = `#1d3f3a`;
let torso_color = `#522522`;
let hand_color = `#1d3f3a`;
let jeans_back_color = `#444444`;
let jeans_front_color = `#444444`;
let jeans_dark_color = `#000000`;

const skin_colors = ['#F6D7B3', '#D09168', '#AA7D55', '#582A12']


const result = `
  <svg 
  id="Layer_1" 
  data-name="Layer 1" 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 240 400">
      <defs>
          <style>
              .head{fill:${head_color};}
              .torso{fill:${torso_color};}
              .hand{fill:${hand_color};}
              .jeans-back{fill: ${jeans_back_color};}
              .jeans-front{fill: ${jeans_front_color};}
              .jeans-dark{fill: ${jeans_dark_color};}
              ${styles.sad_l_style}
              ${styles.love_e_style}
              ${styles.freddie_style}
              ${styles.tongue_style}
              ${styles.pain_style}
              ${styles.mustache_style}
              ${styles.aviator_style}
              ${styles.tired_style}
              ${styles.dead_style}
              ${styles.snow_style}
          </style>
      </defs>
      ${template.legs}
      ${template.torso}
      ${template.head}
      ${template.snowman}    
  </svg>
  `;

fs.writeFile("./file_new.svg", result, (err) => {
  if (err) {
    return console.err(err);
  }
  console.log("The file was saved!");
});
