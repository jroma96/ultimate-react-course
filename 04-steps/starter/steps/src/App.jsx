import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
    return (
      <>
        <button
          className="close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &times;
        </button>
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
                step === 0 ? null : setStep((s) => s - 1);
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                step === 2 ? null : setStep((s) => s + 1);
              }}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button
          className="close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &times;
        </button>
      </>
    );
  }
}

export default App;
