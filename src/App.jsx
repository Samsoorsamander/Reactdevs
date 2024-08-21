import { useState } from "react";

export default function App() {
  return (
    <>
      <Clock color="red" time="12:00" />
    </>
  );
}

function Clock(props) {
  const [color, setColor] = useState("red");
  function handleColor() {
    setColor("pink");
  }
  return (
    <>
      <h1 style={{ color: color }}>{props.time}</h1>
      <button onClick={handleColor}>Change Color</button>
    </>
  );
}
