import { useState } from "react";
import Chat from "./Components/Chat";
import ContactLists from "./Components/ContactLists";

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
      <ContactLists
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
