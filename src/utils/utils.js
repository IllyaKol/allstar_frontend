import palette from 'google-palette'


function redirect(self, redirectUrl) {
  self.$router.push({name: redirectUrl})
}

function generateColors(count) {
  let colors = palette(['tol', 'qualitative'], count);
  for (let i = 0; i < colors.length; i++) {
    colors[i] = '#' + colors[i]
  }
  return colors
}

function createHoverColors(colors) {
  let hoverColors = [];
  for (let i = 0; i < colors.length; i++) {
    hoverColors.push(shadeColor(colors[i], 30))
  }
  return hoverColors
}

function shadeColor(color, percent) {

  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

export {redirect, generateColors, createHoverColors}
