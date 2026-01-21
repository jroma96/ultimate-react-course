import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [open, setOpen] = useState(-1);

  function handleToggle(key) {
    setOpen(key);
  }

  function Accordion({ data }) {
    return (
      <div className="accordion">
        {data.map((item, i) => {
          return (
            <AccordionItem
              num={i + 1}
              title={item.title}
              text={item.text}
              key={i}
              id={i}
              onToggle={handleToggle}
            />
          );
        })}
      </div>
    );
  }

  function AccordionItem({ num, title, text, id, onToggle }) {
    return (
      <div
        className={open === id ? "item open" : "item"}
        onClick={() => onToggle(id)}
      >
        <p className="number">0{num}</p>
        <p className="text">{title}</p>
        <p className="icon">{open ? "-" : "+"}</p>
        {open === id ? <div className="content-box">{text}</div> : <></>}
      </div>
    );
  }
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
