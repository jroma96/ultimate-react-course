function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        id="1"
        type="checkbox"
        checked={item.packed}
        onClick={() => onPackItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>
        <span>{"❌"}</span>
      </button>
    </li>
  );
}
export default Item;
