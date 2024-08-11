import "./App.css";

export default function App() {
  return (
    <>
      <TollBar />
    </>
  );
}

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
  return (
    <>
      <PlayButton movieName="Lift">Play</PlayButton>
      <UploadIMage>Upload</UploadIMage>
    </>
  );
}
