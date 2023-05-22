let gamer1: number = Math.floor((Math.random() * (100-1)) + 1);
let gamer2: number = Math.floor((Math.random() * (100-1)) + 1);

function confronto(num1: number, num2: number) {
    let numero: number = Math.floor((Math.random() * (100-1)) +1);

    let diff1: number = Math.abs(numero-num1), diff2:number = Math.abs(numero-num2);
    console.log('Numero casuale generato = ', numero);
	console.log('Numero giocatore 1: ', gamer1);
	console.log('Numero giocatore 2: ', gamer2);

    if (numero === num1) {
		console.log('Il giocatore n1 ha indovinato \n');

    } else if (numero === num2) {
		console.log('Il giocatore n2 ha indovinato \n');
    } else if (diff1 < diff2) {
		console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
	} else {
		console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
	}
}

confronto(gamer1, gamer2);