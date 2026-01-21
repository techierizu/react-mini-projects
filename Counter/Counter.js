import { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{
          padding: "5px",
          height: "50px",
          width: "50px",
          backgroundColor: "#7f9ff9",
        }}
      >
        -
      </button>
      <span style={{ padding: "5px", height: "50px", fontSize: "30px" }}>
        {count}
      </span>
      <button
        onClick={() => dispatch({ type: "increment" })}
        style={{
          padding: "5px",
          height: "50px",
          width: "50px",
          backgroundColor: "#7f9ff9",
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
