/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import pizzaData from "./assets/data.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

function Pizza({ img, name, ingredients }) {
  return (
    <div className="pizza div">
      <h3 className="pizza h3">
        <b style={{ color: "gray" }}>{name}</b>
      </h3>
      <img
        className="pizza img"
        src={new URL(`${img}`, import.meta.url).href}
        alt={name}
      />
      <p className="pizza p">{ingredients}</p>
    </div>
  );
}

function Header() {
  return (
    <h1>
      <b>Roma's Pizzeria</b>
    </h1>
  );
}

function Row({ item1, item2 }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Pizza
        name={item1.name}
        img={item1.photoName}
        ingredients={item1.ingredients}
      />
      <Pizza
        name={item2.name}
        img={item2.photoName}
        ingredients={item2.ingredients}
      />
    </div>
  );
}

function Menu({ pizzaData }) {
  const rowArr = [];
  for (let i = 0; i < pizzaData.length; i += 2) {
    rowArr.push([pizzaData[i], pizzaData[i + 1]]);
  }
  const data = rowArr;
  console.log(data.length);
  console.log(rowArr);
  return (
    <div className="menu">
      <h2 style={{ fontSize: "48px", color: "gray" }}>Our Menu</h2>
      {rowArr.map((row) => (
        <Row item1={row[0]} item2={row[1]} />
      ))}
    </div>
  );
}

function Footer() {
  return <footer className="footer">Currently Open on Guatemala</footer>;
}

export default App;
