import { useState } from "react";
import "./Chips.css";
function ChipsInput() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const hadleKeyDown = (e) => {
    if (e.key === "Enter" && input !== "") {
      setChips((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    ///With Splice Method//////////////////////
    // const newChips = [...chips];
    // newChips.splice(index, 1);
    // setChips(newChips);

    ///With Filter Method//////////////////////

    setChips(chips.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Enter Your Chips!!</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => hadleKeyDown(e)}
      />

      <div className="chipsContainer">
        {chips.map((chip, index) => {
          return (
            <div className="Chip" key={index}>
              <span>{chip}</span>
              <button
                style={{ color: "red", marginLeft: "5px" }}
                onClick={() => handleDelete(index)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
