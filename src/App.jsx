import "./App.css";

export default function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

function SignUp() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submiting!");
      }}
    >
      <button>Send</button>
    </form>
  );
}
