import "./TicTacToe.css";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();

  console.log(board);
  return (
    <div className="parent">
      <h1>TicTacToe!</h1>
      <h3>{getStatusMessage()}</h3>
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              className="cellStyle"
              onClick={() => handleClick(index)}
              disabled={cell !== null}
            >
              {cell}
            </button>
          );
        })}
      </div>
      <div></div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
