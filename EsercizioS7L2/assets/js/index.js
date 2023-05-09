let userList = []; //creo un array vuoto da riempire con i valori degli inputfield

const nameField = document.getElementById("name"); //ho creato i riferimenti agli input field e ai bottoni del form
const surnameField = document.getElementById("surname");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");

saveButton.addEventListener("click", function (e) {
  //ho creato un eventListener per il click del tasto saveButton
  e.preventDefault(); //aggiungendo una funzione preventDefault per far si che non si aggiorni la pagina ad ogni click

  const newUser = {
    //ho definito un costruttore che creerà un oggetto prendendo i value dell'inputfield
    name: nameField.value,
    surname: surnameField.value,
  };

  userList.push(newUser); //pusho l'oggetto dentro l'array vuoto che ho creato all'inizio

  const userListAsString = JSON.stringify(userList); // uso stringify per convertire l'array in una stringa

  console.log(userListAsString); //verifico che l'oggetto nell'array sia stato convertito in stringa

  localStorage.setItem("Utente", userListAsString); //salvo nel localStorage la stringa con chiave Utente

  clearButton.addEventListener("click", function (e) {
    //aggiungo eventListener al clearButton per rimuovere L'Utente salvato prima
    e.preventDefault();
    localStorage.removeItem("Utente", userListAsString);
  });
});

window.onload = function () {
  //al caricamento della pagina, se "Utente" è salvato nel localStorage, uso il comando parse per ritrasformare la stringa in array "newContactsArray"
  if (localStorage.getItem("Utente")) {
    let arrayUtenteFromLocalStorage = localStorage.getItem("Utente");

    let newContactsArray = JSON.parse(arrayUtenteFromLocalStorage)[0]; //entro nell'array "newContactsArray" per far si che nel placeholder rimangano i dati precedentemente salvati nel localStorage

    nameField.value = newContactsArray.name;
    surnameField.value = newContactsArray.surname;
  }
};
