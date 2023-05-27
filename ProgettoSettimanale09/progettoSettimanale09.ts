interface Registro {
    credito: number;
    numeroChiamate: number;

    getRicarica(ammontare: number): void;
    getChiamata(durata: number): void;
    getNumero404(): number;
    getNumeroChiamate(): number;
    getAzzeraChiamate(): void;
}

class Primo implements Registro {
    credito: number;
    numeroChiamate: number;
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate
    }

getRicarica(ammontare: number): void {
     this.credito += ammontare;
}

getChiamata(durata: number): void {
    const costoMinuto: number = 0.20
    const costoChiamata: number = costoMinuto * durata;
    if (costoChiamata <= this.credito) {
        this.credito -= costoChiamata;
        this.numeroChiamate++
    } else {
        console.log("Credito insufficiente")
        
    }
}

getNumero404(): number {
    return this.credito;   
}

getNumeroChiamate(): number {
    return this.numeroChiamate;
}

getAzzeraChiamate(): void {
    this.numeroChiamate = 0
}

}

let nuovoRegistro = new Primo (30, 4)

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


class Secondo implements Registro {
    credito: number;
    numeroChiamate: number;
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate
    }

getRicarica(ammontare: number): void {
     this.credito += ammontare;
}

getChiamata(durata: number): void {
    const costoMinuto: number = 0.20
    const costoChiamata: number = costoMinuto * durata;
    if (costoChiamata <= this.credito) {
        this.credito -= costoChiamata;
        this.numeroChiamate++
    } else {
        console.log("Credito insufficiente")
        
    }
}

getNumero404(): number {
    return this.credito;   
}

getNumeroChiamate(): number {
    return this.numeroChiamate;
}

getAzzeraChiamate(): void {
    this.numeroChiamate = 0
}
}

let nuovoRegistroDue = new Secondo (25, 5)

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


class Terzo implements Registro {
    credito: number;
    numeroChiamate: number;
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate
    }

getRicarica(ammontare: number): void {
     this.credito += ammontare;
}

getChiamata(durata: number): void {
    const costoMinuto: number = 0.20
    const costoChiamata: number = costoMinuto * durata;
    if (costoChiamata <= this.credito) {
        this.credito -= costoChiamata;
        this.numeroChiamate++
    } else {
        console.log("Credito insufficiente")
        
    }
}

getNumero404(): number {
    return this.credito;   
}

getNumeroChiamate(): number {
    return this.numeroChiamate;
}

getAzzeraChiamate(): void {
    this.numeroChiamate = 0
}
}

let nuovoRegistroTre = new Terzo (15, 7)

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





