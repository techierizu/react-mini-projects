import { useEffect, useState } from "react";

function GridLights() {
  const gridStructure = Array(9).fill(null);
  const [isClicked, setIsClicked] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleClick = (i) => {
    if (isClicked.includes(i) || isDeactivating) return;

    const newClicked = [...isClicked, i];
    setIsClicked(newClicked);

    // If grid is full, start deactivating
    if (newClicked.length === gridStructure.length) {
      setIsDeactivating(true);
    }
  };

  useEffect(() => {
    // Only run this effect if we are in "Deactivating" mode
    if (isDeactivating) {
      const timer = setInterval(() => {
        setIsClicked((prev) => {
          const newOrder = [...prev]; // Create a COPY (Immutability)
          newOrder.pop(); // Remove the last item

          if (newOrder.length === 0) {
            clearInterval(timer);
            setIsDeactivating(false); // Reset mode
          }
          return newOrder;
        });
      }, 300);

      // Cleanup function to kill timer if component unmounts
      return () => clearInterval(timer);
    }
  }, [isDeactivating]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Grid Lights baby!</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "10px",
        }}
      >
        {gridStructure.map((_, i) => {
          return (
            <button
              key={i}
              style={{
                height: "100px",
                width: "100px",
                cursor: "pointer",
                backgroundColor: isClicked.includes(i) ? "green" : "",
              }}
              onClick={() => handleClick(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default GridLights;
