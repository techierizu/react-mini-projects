import { useEffect, useState } from "react";
import "./Search.css";
function Search() {
  const [input, setInput] = useState();
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    // console.log(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    console.log(cache);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Autocomplete Search Bar</h1>
      <div onBlur={() => setShowResults(false)}>
        <div>
          <input
            type="text"
            value={input}
            className="input"
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
        </div>
        {showResults && (
          <div className="recipies-list">
            {results.map((r) => (
              <span key={r.id} className="recipies-item">
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
