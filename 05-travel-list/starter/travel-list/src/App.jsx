import { useState } from "react";
import "./App.css";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [sortby, setSortby] = useState("input");
  //const [packedItems, setPackedItems] = useState(0);

  function handleAddItems(item) {
    setItems((arr) => [...arr, item]);
  }

  function handleDeleteItem(id) {
    setItems((arr) => arr.filter((item) => item.id != id));
  }

  function handlePackItem(id) {
    setItems((arr) =>
      arr.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i)),
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("are you sure?");

    if (confirmed) setItems([]);
  }

  function handleSortby(criteria) {
    setSortby(criteria);
  }

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onClearItems={handleClearItems}
        sortby={sortby}
        onSetSortby={handleSortby}
      />
      <Stats
        itemQuantity={items.length}
        packedItems={items.filter((item) => item.packed).length}
      />
    </div>
  );
}

export default App;
