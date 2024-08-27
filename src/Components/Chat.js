import { useReducer } from "react";

export default function Chat({ contact, text, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) =>
          dispatch({ type: "edited_message", message: e.target.value })
        }
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
