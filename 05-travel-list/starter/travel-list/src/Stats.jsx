function Stats({ itemQuantity, packedItems }) {
  return (
    <footer className="stats">
      <em>
        ⛱ You have <b>{itemQuantity}</b> items on your list and{" "}
        <b>{packedItems}</b> are packed
      </em>
    </footer>
  );
}
export default Stats;
