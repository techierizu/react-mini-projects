import { useState, useEffect } from "react";

function Accordion({ questions }) {
  const [openId, setOpenId] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  const handleToggle = (id) => {
    if (enableMulti) {
      setOpenId((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenId((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  useEffect(() => {
    // setOpenId([]);
  }, [enableMulti]);

  return (
    <>
      <label>
        Enable Multi Selection
        <input
          type="checkbox"
          checked={enableMulti}
          onChange={() => setEnableMulti(!enableMulti)}
        />
      </label>

      {questions.map((question) => (
        <div key={question.id}>
          <h3>
            {question.title}

            {openId.includes(question.id) ? (
              <button onClick={() => handleToggle(question.id)}>-</button>
            ) : (
              <button onClick={() => handleToggle(question.id)}>+</button>
            )}
          </h3>
          {openId.includes(question.id) && <span>{question.info}</span>}
        </div>
      ))}
    </>
  );
}

export default Accordion;
