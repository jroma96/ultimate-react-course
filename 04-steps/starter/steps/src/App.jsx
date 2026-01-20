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
  //function handleClick(action) {}
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
          <StepMessage step={step}>{messages[step]}</StepMessage>
          <div className="buttons">
            <Button
              text="previous"
              textColor="#fff"
              bgColor="#7950f2"
              onClick={() => {
                step === 0 ? null : setStep((s) => s - 1);
              }}
            />
            <Button
              text="next"
              textColor="#fff"
              bgColor="#7950f2"
              onClick={() => {
                step === 2 ? null : setStep((s) => s + 1);
              }}
            />
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
function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function StepMessage(props) {
  return (
    <p className="message">
      <span>
        Step {props.step + 1}: {props.children}
      </span>
    </p>
  );
}

export default App;
