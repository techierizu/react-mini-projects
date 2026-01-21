import { useState } from "react";
import "./Chess.css";

const boardSize = 8;
const rows = new Array(boardSize).fill(0);
const cols = new Array(boardSize).fill(0);
// console.log(rows, cols);
function Chess() {
  const [selected, setSelected] = useState(null);

  const handleSelected = ({ rindex, cindex }) => {
    // Toggle selection logic
    if (selected?.rindex === rindex && selected?.cindex === cindex) {
      setSelected(null);
    } else {
      setSelected({ rindex, cindex });
    }
  };

  const getSquareStyles = (rindex, cindex) => {
    const isBlack = (cindex + rindex) % 2 === 1;
    const baseClass = isBlack ? "black" : "white";

    // Check if this square is the one clicked
    const isSelectedPiece =
      selected?.rindex === rindex && selected?.cindex === cindex;

    // Bishop Logic: Diagonals satisfy |Δrow| === |Δcol|
    const isHighlighted =
      selected &&
      Math.abs(selected.rindex - rindex) === Math.abs(selected.cindex - cindex);

    return `square ${baseClass} ${isHighlighted ? "green" : ""} ${
      isSelectedPiece ? "active" : ""
    }`;
  };

  return (
    <div>
      <h3>Chess</h3>
      <div className="board-grid">
        {rows.map((_, rindex) =>
          cols.map((_, cindex) => {
            const squareClassName = getSquareStyles(rindex, cindex);
            return (
              <div
                className={squareClassName}
                key={`${cindex}${rindex}`}
                onClick={() => handleSelected({ rindex, cindex })}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default Chess;
