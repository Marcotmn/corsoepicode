const apiProduct = "https://striveschool-api.herokuapp.com/api/product/";

//DEFINISCO UNA VARIABILE "getProducts" da richiamare nella funzione windows.onLoad
const getProducts = function () {
  fetch(apiProduct, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjIzNjg4Zjc0MDAwMTQyODc2OTgiLCJpYXQiOjE2ODM4OTA3NDIsImV4cCI6MTY4NTEwMDM0Mn0.XQGCOYDu7V28rd4l0Y5S-wonDwPISGy-aV7xRzVGXIM",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei prodotti");
      }
    })
    .then((datiProdotti) => {
      console.log("Prodotti nel database", datiProdotti);

      //CICLO L'ARRAY DEL PRODOTTO PER STAMPARLO SUL DOM
      datiProdotti.forEach((event) => {
        let colTemplate = `
            <div class="card" style="width: 18rem;">
            <img src="${event.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <p class="card-text">${event.brand}</p>
              <p class="card-text">${event.price}€</p>

              <a href="./backoffice.html?eventId=${event._id}" class="btn btn-primary">MODIFICA</a>

              <a href="./details.html?eventId=${event._id}" class="btn btn-primary">Scopri di più</a>
            </div>
          </div>`;

        let rowReference = document.getElementById("productsList");
        rowReference.innerHTML += colTemplate;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

//ALL'AVVIO DELLA PAGINA INDEX, RICHIAMO I DATI

window.onload = () => {
  getProducts();
};
