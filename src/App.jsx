import { useState } from "react";

export default function App() {
  return (
    <>
      <EditProfile />
    </>
  );
}

function EditProfile() {
  const [firstName, setFirstName] = useState("Samsoor");
  const [lastName, setLastName] = useState("samander");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label id="firstname">
        First name:{" "}
        {isEditing ? (
          <input
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label id="lastname">
        Last name:{" "}
        {isEditing ? (
          <input
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edite"} Profile</button>
      <p>
        <i>
          Hello , {firstName} " " {lastName}
        </i>
      </p>
    </form>
  );
}
