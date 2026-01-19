import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((s) => s + 1);
      }}
    >
      {count}
    </button>
  );
}

export default App;
