import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MultiRangeSlider from './MultiRangeSlider'
import './App.css'

function App() {

  const [sliderValues, setSliderValues] = useState({
    min: 0,
    mid: 50,
    max: 100
  })

  const handleChange = (values) => {
    console.log(values)
  }

  return (
    <>
      <MultiRangeSlider min={0} max={100} onChange={handleChange} />
    </>
  )
}

export default App
