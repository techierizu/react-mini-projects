import { useState, useCallback } from "react";

function Debouncing() {
  const [input, setInput] = useState();
  const [debouncedText, setDebouncedText] = useState();

  function handleChange(e) {
    setInput(e.target.value);
    handler(e.target.value);
  }

  function debounce(cb, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const handler = useCallback(
    debounce((nextValue) => setDebouncedText(nextValue), 300)
  );

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      <br />
      <span>Search Text: {input}</span>
      <br />
      <span>Debounced Text : {debouncedText}</span>
    </div>
  );
}

export default Debouncing;
