import React from 'react'

const HueSlider = ({ hue, }) => {
  return (
    <form>
      <label for={{ hue }}>
        {{ hue }}
      </label>
      <input type="range" id={{ hue }} name={{ hue }} min="0" max="239" />
    </form>
  )
}

export default HueSlider