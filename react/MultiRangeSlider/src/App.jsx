import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MultiRangeSlider from './MultiRangeSlider'
import './App.css'

function App() {

  const [sliderValues, setSliderValues] = useState({
    min: 0,
    mid: 500,
    max: 1000
  })

  const handleSliderChange = useCallback((newValues) => {
    // Apenas atualiza o estado se os valores forem diferentes
    if (newValues.min !== sliderValues.min || newValues.mid !== sliderValues.mid || newValues.max !== sliderValues.max) {
      setSliderValues(newValues);
    }
  }, [sliderValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSliderValues((prevValues) => ({
      ...prevValues,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <div>
        <label>
          Min Value:
          <input
            type="number"
            name="min"
            value={sliderValues.min}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mid Value:
          <input
            type="number"
            name="mid"
            value={sliderValues.mid}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Max Value:
          <input
            type="number"
            name="max"
            value={sliderValues.max}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <MultiRangeSlider
        min={0}
        mid={500}
        max={1000}
        onChange={handleSliderChange} />
    </>
  )
}

export default App
