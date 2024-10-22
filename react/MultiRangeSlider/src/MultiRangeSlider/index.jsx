import React, { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import './MultiRangeSlider.css';

const MultiRangeSlider = ({ min, mid, max, values, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [midVal, setMidVal] = useState(mid);
  const [maxVal, setMaxVal] = useState(max);

  // Estados para controlar a visibilidade dos tooltips
  const [showMinTooltip, setShowMinTooltip] = useState(false);
  const [showMidTooltip, setShowMidTooltip] = useState(false);
  const [showMaxTooltip, setShowMaxTooltip] = useState(false);

  const minValRef = useRef(null);
  const midValRef = useRef(null);
  const maxValRef = useRef(null);

  const rangeMinToMid = useRef(null);
  const rangeMidToMax = useRef(null);
  const rangeMaxToEnd = useRef(null);

  // Função para calcular a porcentagem
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const handleSliderChangeEnd = () => {
    onChange({ min: minVal, mid: midVal, max: maxVal });
    setShowMinTooltip(false);
    setShowMidTooltip(false);
    setShowMaxTooltip(false);
  };

  // Atualizar a faixa entre min e mid
  useEffect(() => {
    if (midValRef.current && minValRef.current) {
      const minPercent = getPercent(minVal);
      const midPercent = getPercent(midVal);

      if (rangeMinToMid.current) {
        rangeMinToMid.current.style.left = `${minPercent}%`;
        rangeMinToMid.current.style.width = `${midPercent - minPercent}%`;
      }
    }
  }, [minVal, midVal, getPercent]);

  // Atualizar a faixa entre mid e max
  useEffect(() => {
    if (midValRef.current && maxValRef.current) {
      const midPercent = getPercent(midVal);
      const maxPercent = getPercent(maxVal);

      if (rangeMidToMax.current) {
        rangeMidToMax.current.style.left = `${midPercent}%`;
        rangeMidToMax.current.style.width = `${maxPercent - midPercent}%`;
      }
    }
  }, [midVal, maxVal, getPercent]);

  // Atualizar a faixa entre max e o final do slider
  useEffect(() => {
    if (maxValRef.current) {
      const maxPercent = getPercent(maxVal);

      if (rangeMaxToEnd.current) {
        rangeMaxToEnd.current.style.left = `${maxPercent}%`; // Começa onde o maxVal está
        rangeMaxToEnd.current.style.width = `${100 - maxPercent}%`; // Vai até o fim (100%)
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (values) {
      setMinVal(values.min);
      setMidVal(values.mid);
      setMaxVal(values.max);
    }
  }, [values]);

  return (
    <div className="container">

      {/* Tooltip para o valor mínimo */}
      {showMinTooltip && <div className="tooltip" style={{ left: `${getPercent(minVal + 5)}%` }}>{minVal}</div>}

      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onMouseDown={() => setShowMinTooltip(true)}
        onMouseUp={handleSliderChangeEnd}
        onTouchEnd={handleSliderChangeEnd}
        onTouchStart={() => setShowMaxTooltip(true)}
        onChange={(event) => {
          const value = Math.min(+event.target.value, midVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zindex-3")}
      />

      {/* Tooltip para o valor intermediário */}
      {showMidTooltip && <div className="tooltip" style={{ left: `${getPercent(midVal)}%` }}>{midVal}</div>}
      <input
        type="range"
        min={min}
        max={max}
        value={midVal}
        ref={midValRef}
        onMouseDown={() => setShowMidTooltip(true)}
        onMouseUp={handleSliderChangeEnd}
        onTouchEnd={handleSliderChangeEnd}
        onTouchStart={() => setShowMidTooltip(true)}
        onChange={(event) => {
          const value = Math.max(Math.min(+event.target.value, maxVal - 1), minVal + 1);
          setMidVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      {/* Tooltip para o valor máximo */}
      {showMaxTooltip && <div className="tooltip" style={{ left: `${getPercent(maxVal)}%` }}>{maxVal}</div>}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onMouseDown={() => setShowMaxTooltip(true)}
        onMouseUp={handleSliderChangeEnd}
        onTouchStart={() => setShowMaxTooltip(true)}
        onTouchEnd={handleSliderChangeEnd}
        onChange={(event) => {
          const value = Math.max(+event.target.value, midVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">

        <div className="slider__track"></div>
        <div ref={rangeMinToMid} className="slider__range slider__range--min-to-mid"></div>
        <div ref={rangeMidToMax} className="slider__range slider__range--mid-to-max"></div>
        <div ref={rangeMaxToEnd} className="slider__range slider__range--max-to-end"></div>

        <div className='sliders-values'>
          <div className='sliders-values-items'>
            <div>|</div>
            <div>0</div>
          </div>
          <div className='sliders-values-items'>
            <div>|</div>
            <div>250</div>
          </div>
          <div className='sliders-values-items'>
            <div>|</div>
            <div>500</div>
          </div>
          <div className='sliders-values-items'>
            <div>|</div>
            <div>750</div>
          </div>
          <div className='sliders-values-items'>
            <div>|</div>
            <div>1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
