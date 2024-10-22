import { useState, useCallback } from 'react';
import MultiRangeSlider from './MultiRangeSlider';

const App = () => {
  const [sliderValues, setSliderValues] = useState({ min: 0, mid: 500, max: 1000 });

  const handleSliderChange = useCallback((newValues) => {
    const min = Math.min(newValues.min, newValues.mid);
    const mid = Math.max(Math.min(newValues.mid, newValues.max), min);
    const max = Math.max(newValues.max, mid);

    if (min !== sliderValues.min || mid !== sliderValues.mid || max !== sliderValues.max) {
      setSliderValues({ min, mid, max });
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
        values={sliderValues}
        onChange={handleSliderChange}
      />
    </>
  );
};

export default App;