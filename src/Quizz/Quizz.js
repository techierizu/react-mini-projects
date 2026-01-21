import { quiz } from "./react-quizz.json";
import { useState } from "react";
import "./Quizz.css";

function Quizz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [points, setpoints] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { questions, topic } = quiz;
  const { question, choices, correctAnswer } = quiz.questions[activeQuestion];

  // console.log(quiz);

  const handleAnswerSelected = (choice) => {
    setSelectedAnswer(true);
    setAnswer(choice);
  };

  const handlenext = () => {
    calculatePoints();
    if (selectedAnswer && activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(false);
    } else if (activeQuestion === questions.length - 1) {
      setShowResult(true);
      setActiveQuestion(0);
    }
  };

  const calculatePoints = () => {
    if (answer === correctAnswer) {
      setpoints((prev) => prev + 5);
    }
  };

  const handleRetake = () => {
    setShowResult(false);
    setpoints(0);
    setSelectedAnswer(false);
    setActiveQuestion(0);
  };
  // console.log(points);

  return (
    <div>
      <h1>Quizz</h1>
      {!showResult ? (
        <div className="quizz-container">
          <h3>{question}</h3>
          <span className="active-question-no">
            {activeQuestion + 1} / {questions.length}
          </span>
          <div className="options">
            {choices.map((choice) => {
              return (
                <button
                  key={choice}
                  className="btn-option"
                  style={{
                    backgroundColor: choice === answer ? "#eca2ff" : "",
                  }}
                  onClick={() => handleAnswerSelected(choice)}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          <button className="btn-next" onClick={handlenext}>
            Next
          </button>
        </div>
      ) : (
        <div className="Result">
          <h4>Total score: {points}</h4>
          <button onClick={handleRetake}>Retake quiz</button>
        </div>
      )}
    </div>
  );
}
export default Quizz;
