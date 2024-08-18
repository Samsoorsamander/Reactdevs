let firstName = "Jane";
let lastName = "Jacobs";
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    editButton.textContent = "Save Profile";
    // TODO: show inputs, hide content
    show(firstNameInput);
    show(lastNameInput);
    hide(firstName);
    hide(lastName);
  } else {
    editButton.textContent = "Edit Profile";
    // TODO: hide inputs, show content
    show(firstName);
    show(lastName);
    hide(firstNameInput);
    hide(lastNameInput);
  }
  // TODO: update text labels
  firstNameText.textContent = firstName;
  lastNameText.textContent = lastName;
  helloText = "Hello" + " " + firstName + " " + lastName;
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}
function setFirstName(value) {
  firstName = value;
  updateDOM();
}
function setLastName(value) {
  lastName = value;
  updateDOM();
}
function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}
let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
