import React, { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import './MultiRangeSlider.css';

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [midVal, setMidVal] = useState((min + max) / 2);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const midValRef = useRef(null);
  const maxValRef = useRef(null);
  const rangeMinToMid = useRef(null);
  const rangeMidToMax = useRef(null);

  // Função para calcular a porcentagem
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

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

  // Obter valores atualizados sempre que o estado mudar
  useEffect(() => {
    onChange({ min: minVal, mid: midVal, max: maxVal });
  }, [minVal, midVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, midVal - 1);
          setMinVal(value);
        }}
        className={classnames("thumb thumb--zindex-3")}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={midVal}
        ref={midValRef}
        onChange={(event) => {
          const value = Math.max(Math.min(+event.target.value, maxVal - 1), minVal + 1);
          setMidVal(value);
        }}
        className="thumb thumb--zindex-4"
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, midVal + 1);
          setMaxVal(value);
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track"></div>

        <div ref={rangeMinToMid} className="slider__range slider__range--min-to-mid"></div>
        <div ref={rangeMidToMax} className="slider__range slider__range--mid-to-max"></div>

        <div className="slider__left-value">{minVal}</div>
        <div className="slider__mid-value">{midVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
