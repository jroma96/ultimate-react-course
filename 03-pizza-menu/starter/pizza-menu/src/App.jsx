/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import focacciaImg from "./assets/pizzas/focaccia.jpg";
import pizzaData from "./assets/data.js";
import "./App.css";

function App() {
  console.log(pizzaData[0]);
  return (
    <h1>
      Hello World! <b>My friends</b>
      <Pizza />
    </h1>
  );
}

function Pizza() {
  return (
    <div>
      <img src={focacciaImg} alt="focaccia" />
      <div>{pizzaData[0].name}</div>
    </div>
  );
}

export default App;
