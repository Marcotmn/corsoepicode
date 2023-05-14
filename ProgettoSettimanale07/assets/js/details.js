const apiProduct = "https://striveschool-api.herokuapp.com/api/product/";

let addressBarContent = new URLSearchParams(window.location.search);
let eventId = addressBarContent.get("eventId");
console.log("PRODUCTID", eventId);

//DEFINISCO UNA VARIABILE "getProduct" da richiamare nella funzione windows.onLoad
const getProduct = function () {
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
    .then((datiProdotto) => {
      console.log("DATI DEL PRODOTTO", datiProdotto);

      const productDetailsContainer =
        document.getElementById("product-details");

      const productImage = document.createElement("img");
      productImage.src = datiProdotto.imageUrl;
      productImage.classList.add("img-details");

      console.log(productImage.classList)

      const productTitle = document.createElement("h1");
      productTitle.textContent = datiProdotto.name;

      const productBrand = document.createElement("p");
      productBrand.textContent = datiProdotto.brand;

      const productPrice = document.createElement("p");
      productPrice.textContent = `Prezzo: ${datiProdotto.price} €`;

      const productDescription = document.createElement("p");
      productDescription.textContent = datiProdotto.description;

      productDetailsContainer.appendChild(productImage);
      productDetailsContainer.appendChild(productTitle);
      productDetailsContainer.appendChild(productDescription);
      productDetailsContainer.appendChild(productBrand);
      productDetailsContainer.appendChild(productPrice);
    });
};

//ALL'AVVIO DELLA PAGINA INDEX, RICHIAMO I DATI

window.onload = () => {
  getProduct();
};
