import React from 'react'
import { useState, useEffect } from 'react'

const HueSlider = ({ hue, val, onColorChange }) => {

  let changeColor = (e) => {
    onColorChange(hue, e.target.value);
  }

  return (

    <form className="hue-form">
      <label htmlFor={hue}>
        <span className="hue-label">{ hue }</span>: {val} </label>
      <input 
        type="range" className="HueSlider" 
        id={hue} 
        name={hue} 
        min="0" 
        max="255" 
        defaultValue="0"
        value={val}
        onInput={changeColor}
        style={{ accentColor: `${hue}` }} 
      />
    </form>
  )
}

export default HueSlider