import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default function Button() {
  function handleClick() {
    alert("You clicked me");
  }
  return <button onClick={handleClick}>I dont do anyting</button>;
}
