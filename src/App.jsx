import Chat from "./Components/Chat.js";
import ContactList from "./Components/ContactList.js";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Messenger />
    </>
  );
}

function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  );
}

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];
