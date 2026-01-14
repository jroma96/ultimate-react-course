import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step === 0 ? "active" : ""}>1</div>
          <div className={step === 1 ? "active" : ""}>2</div>
          <div className={step === 2 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step + 1}: {messages[step]}
        </p>
        <div className="buttons">
          <button
            onClick={() => {
              step === 0 ? null : setStep(step - 1);
            }}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              step === 2 ? null : setStep(step + 1);
            }}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
