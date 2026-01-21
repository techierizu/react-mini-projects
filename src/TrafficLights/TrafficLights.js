import { useState, useEffect } from "react";
import "./TrafficLights.css";
import TraficConfig from "./TraficConfig";

const TrafficLights = () => {
  const [activeColor, setActiveColor] = useState("yellow");

  useEffect(() => {
    // 1. Get duration and next color from config
    const { duration, next } = TraficConfig[activeColor];

    // 2. Set a timer to change the light
    const timerId = setTimeout(() => {
      setActiveColor(next);
    }, duration);

    // 3. Cleanup the timer if component unmounts or color changes
    return () => clearTimeout(timerId);
  }, [activeColor]);

  return (
    <div>
      <div className="container">
        {Object.keys(TraficConfig).map((color) => (
          <div
            key={color}
            className="trafficLights"
            style={{
              backgroundColor: color === activeColor && color,
              // TraficConfig[activeColor].backgroundColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficLights;
