import './App.css';
import HueSlider from './components/HueSlider';
import ColorPreview from './components/ColorPreview';
import Hex from './components/Hex';

function App() {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <main>
        <Hex/>
        <HueSlider hue="Red"/>
        <HueSlider hue="Blue"/>
        <HueSlider hue="Green"/>
      </main>
      <ColorPreview/>
    </div>
  );
}

export default App;