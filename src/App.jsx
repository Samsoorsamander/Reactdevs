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
  return (
    <button
      onClick={function handleClick() {
        alert("this is inline event handling");
      }}
    >
      Click me
    </button>
  );
}
