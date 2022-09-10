const template = require("./templates");
const styles = require("./styles");

exports.skin_colors = ["#F6D7B3", "#D09168", "#AA7D55", "#F2CD37"];
exports.lego_colors = [
  "#05131D",
  "#0055BF",
  "#237841",
  "#008F9B",
  "#C91A09",
  "#C870A0",
  "#583927",
  "#9BA19D",
  "#6D6E5C",
  "#B4D2E3",
  "#4B9F4A",
  "#55A5AF",
  "#F2705E",
  "#FC97AC",
  "#F2CD37",
  "#FFFFFF",
  "#C2DAB8",
  "#FBE696",
  "#E4CD9E",
  "#C9CAE2",
  "#D4D5C9",
  "#81007B",
  "#2032B0",
  "#FE8A18",
  "#923978",
  "#BBE90B",
  "#958A73",
  "#E4ADC8",
  "#AC78BA",
  "#E1D5ED",
  "#635F52",
  "#0020A0",
  "#84B68D",
  "#D9E4A7",
  "#AEEFEC",
  "#F8F184",
  "#C1DFF0",
  "#DF6695",
];

exports.faces = [
  template.angry,
  template.aviator,
  template.beard,
  // template.chad,
  template.death,
  template.freddie,
  template.happy,
  template.lady,
  template.love_eyes,
  template.mexican,
  template.mustache,
  template.pain,
  template.sad,
  template.sad_lady,
  template.smug,
  template.snowman,
  template.tired,
  template.tongue,
  template.wink,
];
exports.jeans_color = ["#3a80e2", "#104fc8", "#042ba7"];
exports.black_pants_color = ["#444444", "#444444", "#000000"];
exports.styles_inject = `
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
    ${styles.lady_style}
    ${styles.mx_style}              
    ${styles.happy_style}              
    ${styles.sad_style}              
    ${styles.angry_Style}              
    ${styles.smug_style}              
    ${styles.wink_style}              
    ${styles.chad_style}  
`;
