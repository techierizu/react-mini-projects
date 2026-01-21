import { useEffect, useState } from "react";
import "./ColumnTable.css";

function ColumnTable() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [grid, setGrid] = useState([]);

  const initializeGrid = () => {
    const totalBoxes = rows * cols;
    const numbers = [...Array(totalBoxes).keys()].map((n) => n + 1);
    // console.log(numbers);
    setGrid(numbers);
  };

  useEffect(() => {
    initializeGrid();
  }, [rows, cols]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="input-container">
        <label htmlFor="Rows">Rows :: {rows} </label>
        <input
          type="range"
          min="2"
          max="8"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
        />
        <label htmlFor="Cols">Cols :: {cols} </label>
        <input
          type="range"
          min="2"
          max="8"
          value={cols}
          onChange={(e) => setCols(e.target.value)}
        />
      </div>
      <div
        className="Grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 50px)`,
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {grid.map((num, index) => {
          return (
            <div key={index} className="box">
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColumnTable;
