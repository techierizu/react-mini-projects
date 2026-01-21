import { useEffect, useState } from "react";
import "./MatchPair.css";

const MatchPair = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const totalPairs = Math.floor(totalCards / 2);
    const numbers = [...Array(totalPairs).keys()].map((n) => n + 1);
    const suffeledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));
    setCards(suffeledCards);
    setFlipped([]);
    setDisabled(false);
    setWon(false);
    setSolved([]);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  const checkMatch = (id) => {
    let firstId = flipped[0];
    let secondId = id;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1500);
    }
  };

  const handleClick = (id) => {
    if (disabled || won) return;
    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }
    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
    console.log(flipped);
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [cards, solved]);

  return (
    <div>
      <h1>Match Pair</h1>
      <div>
        <label htmlFor="GridSize">Grid Size (max:10): </label>
        <input
          type="number"
          max={10}
          min={2}
          value={gridSize}
          onChange={handleGridSizeChange}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          columnGap: "6px",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => {
          return (
            <div
              className="box"
              style={{
                backgroundColor: isFlipped(card.id)
                  ? isSolved(card.id)
                    ? "green"
                    : "#2668eb"
                  : "",
                color: isFlipped(card.id) ? "white" : "",
              }}
              key={card.id}
              onClick={() => handleClick(card.id)}
            >
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          );
        })}
      </div>
      <div>{won && <div>You've Won!!</div>}</div>
      <div>
        <button onClick={initializeGame}>{won ? "Play again" : "Reset"}</button>
      </div>
    </div>
  );
};

export default MatchPair;
