import { useState } from "react";
import "./TransferList.css";

const countries = [
  {
    id: "1",
    country: "USA",
  },
  {
    id: "2",
    country: "UAE",
  },
  {
    id: "3",
    country: "India",
  },
  {
    id: "4",
    country: "Australia",
  },
  {
    id: "5",
    country: "Canada",
  },
];

function TransferList() {
  const [leftList, setLeftList] = useState(countries);
  const [rightList, setRightList] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleCheck = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };
  console.log(selected);

  const moveAllRight = () => {
    setRightList([...leftList, ...rightList]);
    setSelected([]);
    setLeftList([]);
  };
  const moveRight = () => {
    const toMove = leftList.filter((item) => selected.includes(item.id));
    setRightList([...rightList, ...toMove]);
    setLeftList((prev) => prev.filter((item) => !selected.includes(item.id)));
    setSelected([]);
  };
  const moveLeft = () => {
    const toMove = rightList.filter((item) => selected.includes(item.id));
    setLeftList([...leftList, ...toMove]);
    setRightList((prev) => prev.filter((item) => !selected.includes(item.id)));
    setSelected([]);
  };
  const moveAllLeft = () => {
    setLeftList([...leftList, ...rightList]);
    setRightList([]);
    setSelected([]);
  };

  return (
    <div>
      <h1>Transfer List</h1>
      <div className="main-container">
        <div className="left-container">
          {leftList.map((country) => {
            return (
              <div key={country.id}>
                <input
                  type="checkbox"
                  placeholder={country}
                  checked={selected.includes(country.id)}
                  onChange={() => {
                    handleCheck(country.id);
                  }}
                />
                <label htmlFor="country">{country.country}</label>
              </div>
            );
          })}
        </div>
        <div className="btn-container">
          <button onClick={moveAllRight}>{">>"}</button>
          <button onClick={moveRight}>{">"}</button>
          <button onClick={moveLeft}>{"<"}</button>
          <button onClick={moveAllLeft}>{"<<"}</button>
        </div>
        <div className="right-container">
          {rightList.map((country, id) => {
            return (
              <div key={id}>
                <input
                  type="checkbox"
                  placeholder={country}
                  checked={selected.includes(country.id)}
                  onChange={() => {
                    handleCheck(country.id);
                  }}
                />
                <label htmlFor="country">{country.country}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TransferList;
