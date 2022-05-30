import React from 'react'
import { useState } from 'react'

const HueSlider = ({ hue }) => {

  const [rangeval, setRangeval] = useState(null);

  let range = (e) => {
    setRangeval(e.target.value);
    // console.log(e.target.value);
  }

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
        onInput={range}
        style={{ accentColor: `${hue}` }} />
    </form>
  )
}

export default HueSlider