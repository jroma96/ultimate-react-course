import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [day, setDay] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ margin: "10px" }}
        />
        <p>Step: {step}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => setDay((d) => d + 1)} style={{ margin: "10px" }}>
          +
        </button>
        <input
          value={day}
          onChange={(e) => {
            setDay(Number(e.target.value));
          }}
        />
        <button onClick={() => setDay((d) => d - 1)} style={{ margin: "10px" }}>
          -
        </button>
      </div>
      <Sentence day={day} step={step} />
      {day === 0 && step === 1 ? (
        <></>
      ) : (
        <button
          onClick={() => {
            setDay(0);
            setStep(1);
          }}
        >
          reset
        </button>
      )}
    </div>
  );
}

function Sentence({ day, step }) {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (day === 0) {
    return <p>{"Today is " + today.toLocaleDateString("en-US", options)}</p>;
  } else if (day < 0) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + day * step);
    return (
      <p>
        {day * -1 * step +
          " days ago from today was " +
          newDate.toLocaleDateString("en-US", options)}
      </p>
    );
  } else {
    const newDate = new Date();
    newDate.setDate(today.getDate() + day * step);
    return (
      <p>
        {day * step +
          " days from today is " +
          newDate.toLocaleDateString("en-US", options)}
      </p>
    );
  }
}

export default App;
