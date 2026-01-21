import { useState, useReducer } from "react";

const reducer = (todos, action) => {
  switch (action.type) {
    case "addTodo":
      return [...todos, action.payload.input];
    case "deleteTodo":
      return todos.filter((_, i) => i !== action.payload.index);
    default:
      return todos;
  }
};

function Todo() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handlekeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      dispatch({ type: "addTodo", payload: { input: input } });
      setInput("");
    }
  };

  return (
    <>
      <div>
        <h1>Todo!</h1>
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handlekeyDown(e)}
          />
        </form>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <input type="checkbox" />
                {todo}
                <button
                  onClick={() =>
                    dispatch({
                      type: "deleteTodo",
                      payload: { index: index },
                    })
                  }
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
