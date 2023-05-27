var Primo = /** @class */ (function () {
    function Primo(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Primo.prototype.getRicarica = function (ammontare) {
        this.credito += ammontare;
    };
    Primo.prototype.getChiamata = function (durata) {
        var costoMinuto = 0.20;
        var costoChiamata = costoMinuto * durata;
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente");
        }
    };
    Primo.prototype.getNumero404 = function () {
        return this.credito;
    };
    Primo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Primo.prototype.getAzzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Primo;
}());
var nuovoRegistro = new Primo(30, 4);
console.log("Credito residuo:", nuovoRegistro.credito);
console.log("Numero chiamate:", nuovoRegistro.numeroChiamate);
nuovoRegistro.getRicarica(10);
console.log("Credito residuo dopo la prima ricarica:", nuovoRegistro.credito);
nuovoRegistro.getChiamata(5);
console.log("Credito residuo dopo la prima chiamata:", nuovoRegistro.credito);
console.log("Numero chiamate dopo la prima chiamata:", nuovoRegistro.numeroChiamate);
nuovoRegistro.getRicarica(20);
console.log("Credito residuo dopo la seconda ricarica:", nuovoRegistro.credito);
nuovoRegistro.getChiamata(8);
console.log("Credito residuo dopo la seconda chiamata:", nuovoRegistro.credito);
console.log("Numero chiamate dopo la seconda chiamata:", nuovoRegistro.numeroChiamate);
nuovoRegistro.getAzzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento:", nuovoRegistro.numeroChiamate);
//////////////////////////////////////////////SECONDO REGISTRO
var Secondo = /** @class */ (function () {
    function Secondo(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Secondo.prototype.getRicarica = function (ammontare) {
        this.credito += ammontare;
    };
    Secondo.prototype.getChiamata = function (durata) {
        var costoMinuto = 0.20;
        var costoChiamata = costoMinuto * durata;
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente");
        }
    };
    Secondo.prototype.getNumero404 = function () {
        return this.credito;
    };
    Secondo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Secondo.prototype.getAzzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Secondo;
}());
var nuovoRegistroDue = new Secondo(25, 5);
console.log("Credito residuo:", nuovoRegistroDue.credito);
console.log("Numero chiamate:", nuovoRegistroDue.numeroChiamate);
nuovoRegistroDue.getRicarica(10);
console.log("Credito residuo dopo la prima ricarica:", nuovoRegistroDue.credito);
nuovoRegistroDue.getChiamata(7);
console.log("Credito residuo dopo la prima chiamata:", nuovoRegistroDue.credito);
console.log("Numero chiamate dopo la prima chiamata:", nuovoRegistroDue.numeroChiamate);
nuovoRegistroDue.getRicarica(40);
console.log("Credito residuo dopo la seconda ricarica:", nuovoRegistroDue.credito);
nuovoRegistroDue.getChiamata(20);
console.log("Credito residuo dopo la seconda chiamata:", nuovoRegistroDue.credito);
console.log("Numero chiamate dopo la seconda chiamata:", nuovoRegistroDue.numeroChiamate);
nuovoRegistroDue.getAzzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento:", nuovoRegistroDue.numeroChiamate);
//////////////////////////////////////////////TERZO REGISTRO
var Terzo = /** @class */ (function () {
    function Terzo(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Terzo.prototype.getRicarica = function (ammontare) {
        this.credito += ammontare;
    };
    Terzo.prototype.getChiamata = function (durata) {
        var costoMinuto = 0.20;
        var costoChiamata = costoMinuto * durata;
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente");
        }
    };
    Terzo.prototype.getNumero404 = function () {
        return this.credito;
    };
    Terzo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Terzo.prototype.getAzzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Terzo;
}());
var nuovoRegistroTre = new Terzo(15, 7);
console.log("Credito residuo:", nuovoRegistroTre.credito);
console.log("Numero chiamate:", nuovoRegistroTre.numeroChiamate);
nuovoRegistroTre.getRicarica(25);
console.log("Credito residuo dopo la prima ricarica:", nuovoRegistroTre.credito);
nuovoRegistroTre.getChiamata(15);
console.log("Credito residuo dopo la prima chiamata:", nuovoRegistroTre.credito);
console.log("Numero chiamate dopo la prima chiamata:", nuovoRegistroTre.numeroChiamate);
nuovoRegistroTre.getRicarica(20);
console.log("Credito residuo dopo la seconda ricarica:", nuovoRegistroTre.credito);
nuovoRegistroTre.getChiamata(20);
console.log("Credito residuo dopo la seconda chiamata:", nuovoRegistroTre.credito);
console.log("Numero chiamate dopo la seconda chiamata:", nuovoRegistroTre.numeroChiamate);
nuovoRegistroTre.getAzzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento:", nuovoRegistroTre.numeroChiamate);
