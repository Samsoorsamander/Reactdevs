export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`this message ${message} sented to  ${contact.email}`);

          dispatch({
            type: "edited_message",
            message: "",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
