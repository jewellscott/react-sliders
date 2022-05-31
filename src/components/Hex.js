import React from 'react'
import fullColorHex from '../utils/fullColorHex';

const Hex = ({ hex }) => {
  return (
    <>
    <h2 className="hex-h2">{ hex.toUpperCase() }</h2>
    </>
  )
}

export default Hex