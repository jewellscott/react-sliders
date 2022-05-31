import { rgbToHex } from "./rgbToHex";

const fullColorHex = function (r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red + green + blue;
};

export { fullColorHex };