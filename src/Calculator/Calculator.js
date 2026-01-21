import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [value, setValue] = useState("");

  const handelone = () => {
    setInput((prev) => [prev + 1]);
  };
  const handelresult = () => {
    console.log("Input: ", input);
  };
  return (
    <div>
      <h1>Calculator</h1>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={value}
      ></textarea>
      <div>
        <button value="1" onClick={(e) => setValue(value + e.target.value)}>
          1
        </button>
        <button value="2" onClick={(e) => setValue(value + e.target.value)}>
          2
        </button>
        <button onClick={() => handelresult()}>3</button>
        <button onClick={() => handelresult()}>4</button>
      </div>
      <div>
        <button onClick={() => handelresult()}>5</button>
        <button onClick={() => handelresult()}>6</button>
        <button onClick={() => handelresult()}>7</button>
        <button onClick={() => handelresult()}>8</button>
      </div>
      <div>
        <button onClick={() => handelresult()}>9</button>
        <button onClick={() => handelresult()}>0</button>
        <button onClick={() => handelresult()}>00</button>
        <button onClick={() => handelresult()}>C</button>
      </div>
      <div>
        <button onClick={() => handelAdd()}>+</button>
        <button onClick={() => handelresult()}>-</button>
        <button onClick={() => handelresult()}>*</button>
        <button onClick={() => handelresult()}>/</button>
        <button onClick={() => handelresult()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
