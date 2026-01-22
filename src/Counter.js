import "./styles.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  const decrement = () => {
    setCount(count - val);
  };
  const increment = () => {
    setCount(count + val);
  };
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
      </div>
      <div>
        <span>Increment By : </span>
        <input type="number" onChange={(e) => setVal(Number(e.target.value))} />
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}
