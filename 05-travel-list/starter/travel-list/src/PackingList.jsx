import Item from "./Item.jsx";

function PackingList({
  items,
  onDeleteItem,
  onPackItem,
  onClearItems,
  sortby,
  onSetSortby,
}) {
  let sortedItems;

  if (sortby === "input") {
    sortedItems = items.slice();
  } else if (sortby === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortby === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => onSetSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
export default PackingList;
