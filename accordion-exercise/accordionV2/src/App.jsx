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
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
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
          />
        );
      })}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);
  function handleToggle() {
    setOpen((o) => !o);
  }
  return (
    <div className={open ? "item open" : "item"} onClick={handleToggle}>
      <p className="number">0{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {open ? <div className="content-box">{text}</div> : <></>}
    </div>
  );
}

export default App;
