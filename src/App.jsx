<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import "./App.css";
>>>>>>> d7ba872 (passing event handler as props)

function App() {
  return (
    <>
<<<<<<< HEAD
      <Button />
=======
      <ToolBar />
>>>>>>> e2486a6 (event going up the tree)
    </>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD

export default App

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
=======
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handleClick}>Play {movieName}</Button>;
}

function UploadIMage() {
  return <Button onClick={() => alert("Uploading")}>Upload image</Button>;
}
function AlettButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
function TollBar() {
=======
function ToolBar() {
>>>>>>> e2486a6 (event going up the tree)
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
>>>>>>> d7ba872 (passing event handler as props)
