let userList = [];

const nameField = document.getElementById("name");
const surnameField = document.getElementById("surname");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");

saveButton.addEventListener("click", function (e) {
  e.preventDefault();

  const newUser = {
    name: nameField.value,
    surname: surnameField.value,
  };

  userList.push(newUser);

  const userListAsString = JSON.stringify(userList);

  console.log(userListAsString);

  localStorage.setItem("Utente", userListAsString);

  clearButton.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("Utente", userListAsString);
  });
});

window.onload = function () {
  if (localStorage.getItem("Utente")) {
    let arrayUtenteFromLocalStorage = localStorage.getItem("Utente");

    let newContactsArray = JSON.parse(arrayUtenteFromLocalStorage)[0];

    nameField.value = newContactsArray.name;
    surnameField.value = newContactsArray.surname;
  }
};

let count = sessionStorage.getItem("count");

const timer = document.getElementById("timer");

const intervalId = setInterval(() => {
  count++;
  timer.innerText = count;
  sessionStorage.setItem("count", count);
}, 1000);
window.addEventListener("closingTab", () => {
  clearInterval(intervalId);
});
