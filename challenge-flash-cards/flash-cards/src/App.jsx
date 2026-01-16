import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  //const [count, setCount] = useState(0)
  return <FlashCards />;
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(-1);
  return (
    <ul className="flashcards">
      {questions.map((item) => {
        return (
          <div
            className={selectedId === item.id ? "selected" : ""}
            onClick={() => {
              if (selectedId === item.id) {
                setSelectedId(-1);
              } else {
                setSelectedId(item.id);
              }
            }}
          >
            {selectedId === item.id ? item.answer : item.question}
          </div>
        );
      })}
    </ul>
  );
}

/*function Question(item) {
  const [selected, setSelected] = useState(false);
  return (
    <p
      className={selected ? "selected" : ""}
      key={item.id}
      onClick={}
    >
      {selected ? item.answer : item.question}
    </p>
  );
}*/
export default App;
