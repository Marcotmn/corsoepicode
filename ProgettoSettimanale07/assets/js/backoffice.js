const apiProduct = "https://striveschool-api.herokuapp.com/api/product/";

//ADDEVENTLISTENER CLICK SUL PULSANTE CON ID RESET-BUTTON PER RESETTARE I CAMPI DEL FORM; CON UN IF CHE TRIGGERA L'ALERT DI CONFERMA

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  const confirmMessage = "Resetta tutti i campi?";
  const userConfirmed = confirm(confirmMessage);
  if (userConfirmed) {
    const productForm = document.getElementById("product-form");
    productForm.reset();
  }
});

//CODICE PER VERIFICA PRESENZA ID PRODOTTO NELLA BARRA DEGLI INDIRIZZI
let addressBarContent = new URLSearchParams(window.location.search);
let eventId = addressBarContent.get("eventId");
console.log("PRODUCTID", eventId);

//CODICE PER CAMBIARE NOME ALLA PAGINA DI BACKOFFICE E SPECIFICARE CHE SIAMO IN MOD. MODIFICA IN PRESENZA DELL'ID PRODOTTO NELLA BARRA DEGLI INDIRIZZI
if (eventId) {
  document.getElementsByTagName("h2")[0].innerText =
    "Backoffice page - Modifica prodotto";

  //CAMBIO LABEL AL PULSANTE CREA PRODOTTO SE IN MODALITà MODIFICA
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";

  //MOSTRO IL PULSANTE DELETE IN MOD.MODIFICA
  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");

  //AGGIUNGO UN EVENTLISTENER CHE AL CLICK DEL BOTTONE DELETE TRIGGERA IL METODO DELETE; AGGIUNGENDO "+ eventId" ALL'ARGOMENTO DELLA FETCH "apiProduct" APPLICO IL METODO AL PRODOTTO SPECIFICO; CON LOCAL.ASSIGN RIMANDO ALLA PAGINA HOME.
  //INOLTRE CON L'IF INIZIALE TRIGGERO LA RICHIESTA DI CONFERMA PER L'UTENTE, TRAMITE L'ALERT
  deleteButton.addEventListener("click", () => {
    if (confirm("Sei sicuro di voler eliminare il prodotto?")) {
      fetch(apiProduct + eventId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjIzNjg4Zjc0MDAwMTQyODc2OTgiLCJpYXQiOjE2ODM4OTA3NDIsImV4cCI6MTY4NTEwMDM0Mn0.XQGCOYDu7V28rd4l0Y5S-wonDwPISGy-aV7xRzVGXIM",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Eliminazione completata con successo");
            location.assign("./index.html");
          } else {
            throw new Error("Problema nell'eliminazione del prodotto");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  //CODICE PER RECUPERARE I DATI CON METODO GET DEL PRODOTTO SPECIFICO (apiProduct + eventId) DA MODIFICARE

  fetch(apiProduct + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjIzNjg4Zjc0MDAwMTQyODc2OTgiLCJpYXQiOjE2ODM4OTA3NDIsImV4cCI6MTY4NTEwMDM0Mn0.XQGCOYDu7V28rd4l0Y5S-wonDwPISGy-aV7xRzVGXIM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero del prodotto");
      }
    })
    .then((event) => {
      console.log("DATI DEL PRODOTTO", event);

      //CODICE PER RIPOPOLARE IL FORM CON I DATI RECUPERATI DALLA FETCH
      document.getElementById("name").value = event.name;
      document.getElementById("description").value = event.description;
      document.getElementById("brand").value = event.brand;
      document.getElementById("imageUrl").value = event.imageUrl;
      document.getElementById("price").value = event.price;
    })
    .catch((error) => {
      console.log(error);
    });
} else {
}

//CODICE PER L'INVIO DATI NUOVI PRODOTTI AL DATABASE UTILIZZANDO UN FORM
const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("invio i dati");

  let prodName = document.getElementById("name").value;
  let prodDescription = document.getElementById("description").value;
  let prodBrand = document.getElementById("brand").value;
  let prodImg = document.getElementById("imageUrl").value;
  let prodPrice = document.getElementById("price").value;
  let url = "https://striveschool-api.herokuapp.com/api/product/";

  let newProd = {
    name: prodName,
    description: prodDescription,
    brand: prodBrand,
    imageUrl: prodImg,
    price: prodPrice,
  };
  console.log("Prodotto pronto da inviare alle API", newProd);

  //UTILIZZO l'OPERATORE TERNARIO 'eventId ? "PUT" : "POST"'
  fetch(eventId ? apiProduct + eventId : apiProduct, {
    method: eventId ? "PUT" : "POST",
    body: JSON.stringify(newProd),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjIzNjg4Zjc0MDAwMTQyODc2OTgiLCJpYXQiOjE2ODM4OTA3NDIsImV4cCI6MTY4NTEwMDM0Mn0.XQGCOYDu7V28rd4l0Y5S-wonDwPISGy-aV7xRzVGXIM",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("RESPONSE DELLA CHIAMATA POST", response);
      if (response.ok) {
        alert(eventId ? "PRODOTTO MODIFICATO!" : "PRODOTTO CREATO!");
        location.assign("/index.html"); // riporto alla pagina home
      } else {
        // 400, 404
        alert("ERRORE NEL SALVATAGGIO");
        throw new Error("ERRORE NEL SALVATAGGIO");
      }
    })

    .catch((err) => {
      console.log(err);
    });
});
