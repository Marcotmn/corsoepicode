/* class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location

    }
    confrontoAge(utenti) {
        if(this.age > utenti.age){
            return `${this.firstName} è più vecchio di ${utenti.firstName}`;
        } else{
            return `${this.firstName} è più vecchio di ${utenti.firstName}`;
        }

    }
}

const utente1 = new User ("Marco", "Tumminia", 30, "Palermo");
const utente2 = new User ("Simone", "Caccamo", 28, "Milano");

console.log(utente1);
console.log(utente2);

console.log(utente1.confrontoAge(utente2)); */





class Pet {
constructor(nome, proprietario, specie, razza){
this.nome = nome
this.proprietario = proprietario
this.specie = specie
this.razza = razza
}

comparaPadrone (padroni) {
   return (this.proprietario === padroni.proprietario) 
}

}

const animale1 = new Pet("Pluto", "Giacomo", "cane", "Labrador");
const animale2 = new Pet("Jack", "Luigi", "gatto", "Persiano")
const animale3 = new Pet("Settimo", "Luigi", "cane", "Barboncino")

console.log(animale1);
console.log(animale2);
console.log(animale3);

console.log(animale1.comparaPadrone(animale2))
console.log(animale2.comparaPadrone(animale3))

const invia = document.getElementById('invia') 


const formAnimali = document.getElementById('formAnimali')
const section = document.getElementById('section')
const mioArray = []

invia.addEventListener('click', (e) => {
    const nome = document.getElementById('name').value
const oName = document.getElementById('oname').value
const species = document.getElementById('species').value
const breed = document.getElementById('breed').value
 mioArray.push(new Pet (this.nome, this.oName, this.species, this.breed))

 section.innerHTML = 
 `<h2>Nome Animale:</h2> <p>${nome}</p>
 <h2>Nome Padrone:</h2> <p>${oName}</p>
 <h2>Specie:</h2> <p>${species}</p> 
 <h2>Razza:</h2> <p>${breed}</p>`
 
 e.preventDefault()
 formAnimali.reset()
 })