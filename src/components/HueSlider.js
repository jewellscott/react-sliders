import React from 'react'
import { useState, useEffect } from 'react'

const HueSlider = ({ hue }) => {

  const [rangeval, setRangeval] = useState(0);

  let val = (e) => {
    setRangeval(e.target.value);
  }

  useEffect(() => {
    const rgbToHex = function (e) {
      let hex = Number(rangeval).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };

    rgbToHex();
  });


  return (

    <form className="hue-form">
      <label htmlFor={hue}>
        <span className="hue-label">{ hue }</span>: {rangeval} </label>
      <input 
        type="range" className="HueSlider" 
        id={hue} 
        name={hue} 
        min="0" 
        max="255" 
        defaultValue="0"
        onInput={val}
        style={{ accentColor: `${hue}` }} />
    </form>
  )
}

export default HueSlider