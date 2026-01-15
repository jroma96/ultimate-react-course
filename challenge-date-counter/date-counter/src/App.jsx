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
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          onClick={() => setStep((s) => s + 1)}
          style={{ margin: "10px" }}
        >
          +
        </button>
        <p>Step: {step}</p>
        <button
          onClick={() => setStep((s) => s - 1)}
          style={{ margin: "10px" }}
        >
          -
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => setDay((d) => d + 1)} style={{ margin: "10px" }}>
          +
        </button>
        <p>Count: {day}</p>
        <button onClick={() => setDay((d) => d - 1)} style={{ margin: "10px" }}>
          -
        </button>
      </div>
      <Sentence day={day} step={step} />
    </>
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
