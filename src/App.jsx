import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <FeedbackForm />
    </>
  );
}

function FeedbackForm() {
  const [name, setName] = useState("");

  function handleClick() {
    setName(prompt("What is your name?"));
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
