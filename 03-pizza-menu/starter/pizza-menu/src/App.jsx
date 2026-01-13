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

function Pizza({ img, name, ingredients, soldOut }) {
  return (
    <li className={soldOut ? "sold-out" : "pizza"}>
      <div className="pizza div">
        <h3 className="pizza h3">
          <b style={{ color: "gray" }}>{name}</b>
        </h3>
        <img
          className="pizza sold-out"
          src={new URL(`${img}`, import.meta.url).href}
          alt={name}
        />
        <p className="pizza p">{ingredients}</p>
      </div>
    </li>
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
        soldOut={item1.soldOut}
      />
      <Pizza
        name={item2.name}
        img={item2.photoName}
        ingredients={item2.ingredients}
        soldOut={item2.soldOut}
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
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      <p>{isOpen ? "We're currently open" : "We're closed"}</p>
    </footer>
  );
}

export default App;
