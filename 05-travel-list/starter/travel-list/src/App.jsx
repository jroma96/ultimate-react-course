import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [quantity, setQuantity] = useState(1);
  //const [packedItems, setPackedItems] = useState(0);

  /*function addPackedItems() {
    let packedItemsT = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].packed) {
        packedItemsT++;
      } else if (packedItemsT > 0) {
        packedItemsT--;
      }
    }
    console.log(packedItemsT);
    setPackedItems(packedItemsT);
  }*/

  function Logo() {
    return <h1>✈ Far Away 🧳</h1>;
  }

  function Form() {
    const [description, setDescription] = useState("");
    return (
      <>
        <form
          className="add-form"
          onSubmit={(e) => {
            e.preventDefault();
            setItems((arr) => [
              ...arr,
              {
                id: items.length + 1,
                description: description,
                quantity: quantity,
                packed: false,
              },
            ]);
          }}
        >
          <h3>🤩 What do you need for your trip?</h3>
          <select
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button>Add</button>
        </form>
      </>
    );
  }

  function PackingList({ items }) {
    return (
      <div className="list">
        <ul className="list">
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }

  function Stats({ itemQuantity }) {
    return (
      <footer className="stats">
        <em>
          ⛱ You have <b>{itemQuantity}</b> items on your list
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
          onClick={() => {
            setCurrentItem((i) => ({ ...i, packed: !i.packed }));
          }}
        >
          {currentItem.packed ? "✅" : "❌"}
        </button>
      </li>
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats itemQuantity={items.length} />
    </div>
  );
}

export default App;
