import './App.css';
import HueSlider from './components/HueSlider';
function App() {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <main>
        <HueSlider hue="Red"/>
      </main>
    </div>
  );
}

export default App;