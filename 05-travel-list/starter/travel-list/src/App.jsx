import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>🤩 What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        ⛱ You have <b>placeholder</b> items on your list
      </em>
    </footer>
  );
}

function Item({ item }) {
  const [currentItem, setCurrentItem] = useState(item);
  return (
    <li>
      <span
        style={currentItem.packed ? { textDecoration: "line-through" } : {}}
      >
        {currentItem.quantity} {currentItem.description}
      </span>
      <button
        onClick={() => setCurrentItem((i) => ({ ...i, packed: !i.packed }))}
      >
        {currentItem.packed ? "✅" : "❌"}
      </button>
    </li>
  );
}

export default App;
