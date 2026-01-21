const TraficConfig = {
  red: {
    duration: 100,
    backgroundColor: "red",
    next: "green",
  },
  yellow: {
    duration: 100,
    backgroundColor: "yellow",
    next: "red",
  },
  green: {
    duration: 100,
    backgroundColor: "green",
    next: "yellow",
  },
};

export default TraficConfig;
