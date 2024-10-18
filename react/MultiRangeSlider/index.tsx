import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef
} from "react";
import classnames from "classnames";
import "./multiRangeSlider.css";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange
}) => {
  const [minVal, setMinVal] = useState(min);
  const [midVal, setMidVal] = useState((min + max) / 2); // Novo valor intermediário
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const midValRef = useRef<HTMLInputElement>(null); // Referência para o valor intermediário
  const maxValRef = useRef<HTMLInputElement>(null);
  const rangeMinToMid = useRef<HTMLDivElement>(null); // Faixa entre minVal e midVal
  const rangeMidToMax = useRef<HTMLDivElement>(null); // Faixa entre midVal e maxVal

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Atualizar faixa entre min e mid
  useEffect(() => {
    if (midValRef.current && minValRef.current) {
      const minPercent = getPercent(minVal);
      const midPercent = getPercent(+midValRef.current.value);

      if (rangeMinToMid.current) {
        rangeMinToMid.current.style.left = `${minPercent}%`;
        rangeMinToMid.current.style.width = `${midPercent - minPercent}%`;
      }
    }
  }, [minVal, midVal, getPercent]);

  // Atualizar faixa entre mid e max
  useEffect(() => {
    if (midValRef.current && maxValRef.current) {
      const midPercent = getPercent(+midValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (rangeMidToMax.current) {
        rangeMidToMax.current.style.width = `${maxPercent - midPercent}%`;
      }
    }
  }, [midVal, maxVal, getPercent]);

  // Obter valores atualizados sempre que o estado mudar
  useEffect(() => {
    onChange({ min: minVal, mid: midVal, max: maxVal });
  }, [minVal, midVal, maxVal, onChange]);

  return (
    <div className="multi-range-container">
      {/* Slider para o valor mínimo */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, midVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("multi-range-thumb multi-range-thumb--zindex-3", {
          "multi-range-thumb--zindex-5": minVal > max - 100
        })}
      />
  
      {/* Slider para o valor intermediário */}
      <input
        type="range"
        min={min}
        max={max}
        value={midVal}
        ref={midValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(Math.min(+event.target.value, maxVal - 1), minVal + 1);
          setMidVal(value);
          event.target.value = value.toString();
        }}
        className="multi-range-thumb multi-range-thumb--zindex-4"
      />
  
      {/* Slider para o valor máximo */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, midVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="multi-range-thumb multi-range-thumb--zindex-4"
      />
  
      <div className="multi-range-slider">
        <div className="multi-range-slider__track"></div>
  
        {/* Faixa entre min e mid */}
        <div ref={rangeMinToMid} className="multi-range-slider__range multi-range-slider__range--min-to-mid"></div>
  
        {/* Faixa entre mid e max */}
        <div ref={rangeMidToMax} className="multi-range-slider__range multi-range-slider__range--mid-to-max"></div>
  
        <div className="multi-range-slider__left-value">{minVal}</div>
        <div className="multi-range-slider__mid-value">{midVal}</div> {/* Valor intermediário */}
        <div className="multi-range-slider__right-value">{maxVal}</div>
      </div>
    </div>
  );  
};

export default MultiRangeSlider;
