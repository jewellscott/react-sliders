import React from 'react'
import { useState } from 'react'

const HueSlider = ({ hue }) => {

  const [rangeval, setRangeval] = useState(null);

  return (

    <form className="hue-form">
      <label htmlFor={hue}>{ hue }: {rangeval} </label>
      <input type="range" className="HueSlider" id={hue} name={hue} min="0" max="255" onInput={(e) => setRangeval(e.target.value)} />
    </form>
  )
}

export default HueSlider