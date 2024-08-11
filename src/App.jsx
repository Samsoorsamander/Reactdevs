import "./App.css";

export default function App() {
  return (
    <>
      <ColorSwitch onChangeColor={() => console.log("cliked")} />
    </>
  );
}

// Challenge 2:
// fix the event

function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}
