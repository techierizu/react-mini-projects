import { useState } from "react";

const initialBoard = Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXnext, setIsXNext] = useState(true);
  const WinningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WinningPatterns.length; i++) {
      const [a, b, c] = WinningPatterns[i];
      // console.log([a, b, c]);
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    // console.log("Winner: ", winner);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXnext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Wins!`;
    if (!board.includes(null)) return `The game is Draw`;
    else return `Player ${isXnext ? "X" : "O"}'s turn!`;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
