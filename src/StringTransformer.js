import { useState } from "react";

function StringTransformer() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const HandleLower = () => {
    setResult(input.toLowerCase());
  };

  const HandleUpper = () => {
    setResult(input.toUpperCase());
  };

  const HandleCamel = () => {
    const words = input.split(" ");
    const camelCase = words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }
      })
      .join("");

    setResult(camelCase);
  };

  const HandleTrim = () => {
    setResult(input.trim());
  };

  const HandlePaskal = () => {
    const words = input.split(" ");
    const pascakaled = words.map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setResult(pascakaled);
  };

  const HandleSnake = () => {
    const words = input.toLowerCase().split(" ");
    const snaked = words.join("_");
    setResult(snaked);
  };

  const Handlekabab = () => {
    const words = input.toLowerCase().split(" ");
    const kababed = words.join("-");
    setResult(kababed);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>String transformers</h1>
        <input type="text" onChange={handleChange} />
      </div>
      <button onClick={HandleLower} style={{ margin: "20px" }}>
        Lower Case
      </button>
      <button onClick={HandleUpper} style={{ margin: "20px" }}>
        Upper Case
      </button>
      <button onClick={HandleCamel} style={{ margin: "20px" }}>
        Camel Case
      </button>
      <button onClick={HandlePaskal} style={{ margin: "20px" }}>
        Paskal Case
      </button>
      <button onClick={HandleSnake} style={{ margin: "20px" }}>
        Snake Case
      </button>
      <button onClick={Handlekabab} style={{ margin: "20px" }}>
        Kebab Case
      </button>
      <button onClick={HandleTrim} style={{ margin: "20px" }}>
        Trim
      </button>

      {/* <h4>{input}</h4> */}
      <h4>{result}</h4>
    </div>
  );
}

export default StringTransformer;
