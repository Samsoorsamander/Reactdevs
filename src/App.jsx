<<<<<<< HEAD
=======
import "./App.css";

export default function App() {
  return (
    <>
      <ToolBar />
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

function ToolBar() {
  return (
    <div
      className="Toolbar"
      onClick={() => alert("you clicked on the toolbar")}
    >
      <Button onClick={() => alert("playing")}>Play </Button>
      <Button onClick={() => alert("upload the image")}>Upload image</Button>
    </div>
  );
}
>>>>>>> 398a744 (stoping propagation)
