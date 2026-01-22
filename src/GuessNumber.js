import { useState, useEffect } from "react";

function Guessnumber() {
  const [number, setNumber] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [message, setMessage] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();
    if (number < randomNumber) {
      setMessage("Your guess is Less than the actual number");
    } else if (number > randomNumber) {
      setMessage("Your Guess is Higher than actual Number");
    } else if (number == randomNumber) {
      setMessage("Congratulations!! You guessed the number right.");
    }
  };

  useEffect(() => {
    setRandomNumber(Math.round(100 * Math.random()));
  }, []);

  return (
    <>
      <div>
        <h1>Guess The Number</h1>
        <h3>Guess a Number between 0 and 100</h3>
        <input
          style={{ width: "100px" }}
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          min="0"
          max="100"
          placeholder="Guess-Number"
        />
        <button onClick={() => setNumber(0)}>Reset</button>
        <button onClick={handleCheck}>Check</button>
      </div>
      <div>
        <h3>{message}</h3>
      </div>
    </>
  );
}

export default Guessnumber;
