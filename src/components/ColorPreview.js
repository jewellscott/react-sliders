import React from 'react'

const ColorPreview = ({ hex }) => {
  return (
    <div className="ColorPreview" style={{ backgroundColor: hex }}></div>
  )
}

export default ColorPreview