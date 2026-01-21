import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [total, setTotal] = useState(null);
  const [service, setService] = useState(null);
  const [friend, setFriend] = useState(null);

  function handleReset() {
    setTotal(0);
    setService(0);
    setFriend(0);
  }
  function handleSetTotal(amount) {
    setTotal(amount);
  }
  function handleSetService(amount) {
    setService(amount);
  }
  function handleSetFriend(amount) {
    setFriend(amount);
  }
  return (
    <div>
      <BillInput value={total} onSetValue={handleSetTotal} inputType="number">
        <p>How much was the bill?</p>
      </BillInput>
      <BillInput value={service} onSetValue={handleSetService}>
        <p>How did you like the service?</p>
      </BillInput>
      <BillInput value={friend} onSetValue={handleSetFriend}>
        <p>How did your friend like the service?</p>
      </BillInput>
      <Detail
        total={total}
        service={service}
        friend={friend}
        onReset={handleReset}
      />
    </div>
  );
}
function BillInput({ children, value, onSetValue, inputType }) {
  if (inputType === "number") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {children}
        <input
          style={{ margin: "10px" }}
          type={inputType}
          value={value}
          onChange={(e) => onSetValue(e.target.value)}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {children}
        <select
          style={{ margin: "10px" }}
          value={value}
          onChange={(e) => {
            onSetValue(Number(e.target.value));
          }}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={0.05}>It was Okay (5%)</option>
          <option value={0.1}>It was great (10%)</option>
          <option value={0.2}>Amazing (20%)</option>
        </select>
      </div>
    );
  }
}
function Detail({ total, service, friend, onReset }) {
  let average = (Number(service) + Number(friend)) / 2;
  let billTotal = Number(total) + average * total;

  if (total > 0) {
    return (
      <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
        <span>
          You pay ${billTotal} (${total}+${Math.floor(average * total)})
        </span>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  } else {
    return <></>;
  }
}
export default App;
