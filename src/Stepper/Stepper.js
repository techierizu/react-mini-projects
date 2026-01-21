import { useState } from "react";
import "./Stepper.css";
function Stepper({ steps = [] }) {
  if (!steps.length) {
    return <></>;
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep == steps.length) {
      setIsComplete(true);
    }
    console.log(currentStep, ".... currentStep");
  };
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setIsComplete(false);
    }
    console.log(currentStep, ".... PrevcurrentStep");
  };

  return (
    <>
      <div className="parent">
        {steps.map((step, index) => {
          return (
            <div
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
              key={index}
            >
              <div
                className={`stepNumber ${
                  currentStep - 1 == index ? "active" : ""
                }`}
              >
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>

              <div className="stepLabel">{step.label}</div>
            </div>
          );
        })}
        <div className={`progressBar`}>
          <div className="progress"></div>
        </div>
      </div>
      <div>
        {isComplete ? (
          <span>Order Delivered successfully!🎉</span>
        ) : (
          <span>{steps[currentStep - 1].content}</span>
        )}
      </div>
      <button onClick={handlePrev}>Previous</button>
      {!isComplete && (
        <button onClick={handleNext}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default Stepper;
