import './App.css';
import HueSlider from './components/HueSlider';
import ColorPreview from './components/ColorPreview';
import Hex from './components/Hex';
import { rgbToHex } from './utils/rgbToHex';
import { fullColorHex } from './utils/fullColorHex';
import { useEffect, useState } from 'react';

function App() {

  const [ redHex, setRedHex ] = useState(255);
  const [ greenHex, setGreenHex ] = useState(255);
  const [ blueHex, setBlueHex ] = useState(255);

  const [ hexColor, setHexColor ] = useState('');

  const onColorChange = (hue, val) => {
    if (hue == "Red") {
      setRedHex(val)
    } else if (hue == "Blue") {
      setBlueHex(val)
    } else {
      setGreenHex(val)
    }
  }

  useEffect(() => {
    setHexColor(fullColorHex(redHex, greenHex, blueHex))
  },[redHex, greenHex, blueHex])


  return (
    <div className="App">
      <h1>Color Picker</h1>
      <main>
        <Hex
          hex={hexColor}
        />
        <HueSlider 
          hue="Red"
          onColorChange={onColorChange}
          val={redHex}
        />
        <HueSlider 
          hue="Blue"
          onColorChange={onColorChange}
          val={blueHex}
        />
        <HueSlider 
          hue="Green"
          onColorChange={onColorChange}
          val={greenHex}
        />
      </main>
      <ColorPreview 
        hex={hexColor}
      />
    </div>
  );
}

export default App;