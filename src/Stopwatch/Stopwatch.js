import { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    console.log(startTimeRef.current, elapsedTime);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setisRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };
  const reset = () => {
    setisRunning(false);
    setElapsedTime(0);
  };
  const pause = () => {
    setisRunning(false);
  };
  const formatTime = () => {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor(elapsedTime / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(3, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <div className="wrapper">
        <span>{formatTime()}</span>
        <div className="btn-group">
          <button className="btn" onClick={() => start()} disabled={isRunning}>
            Start
          </button>
          <button className="btn" onClick={() => reset()}>
            Reset
          </button>
          <button className="btn" onClick={() => pause()} disabled={!isRunning}>
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
