import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  return (
    <>
      <TollBar />
    </>
  );
}

function Button() {
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
function AletButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
function TollBar() {
  return (
    <>
      <AletButton message="playing">Play</AletButton>
      <AletButton message="Uploading">Upload</AletButton>
    </>
  );
}
