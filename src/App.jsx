import "./App.css";

export default function App() {
  return (
    <>
      <ToolBar />
    </>
  );
}

function ToolBar() {
  return (
    <div
      className="Toolbar"
      onClick={() => alert("you clicked on the toolbar")}
    >
      <button onClick={() => alert("playing")}>Play </button>
      <button onClick={() => alert("upload the image")}>Upload image</button>
    </div>
  );
}
