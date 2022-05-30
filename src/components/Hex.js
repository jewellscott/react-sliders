import React from 'react'

const Hex = ({ r, g, b}) => {
  
  const rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  
  const fullColorHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue;
  };
  
  return (
    <h2 className="hex-h2"x>#FFFAKE</h2>
  )
}

export default Hex