import { useState } from "react";

export default function App() {
  return (
    <>
      <Clock color="pink" time="12:00" />
    </>
  );
}

function Clock(props) {
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
