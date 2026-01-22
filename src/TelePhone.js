import { useState } from "react";

function Telephone() {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;

    const rawDigits = inputValue.replace(/\D/g, "");

    if (rawDigits.length > 3) {
      setNumber(`+(${rawDigits.substring(0, 3)}) - ${rawDigits.substring(3)}`);
    } else {
      setNumber(rawDigits);
    }
  };

  return (
    <div>
      <h1>Telephone Number</h1>
      <input type="tel" value={number} onChange={handleNumberChange} />
      <h4>+(123) - 4567890</h4>
    </div>
  );
}

export default Telephone;
