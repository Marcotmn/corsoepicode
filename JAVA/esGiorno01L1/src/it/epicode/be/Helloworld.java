package it.epicode.be;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Scanner;
import static java.lang.Math.sqrt;

public class Helloworld {

public static void main (String[] args)
		{
		// Stampa a console  la frase //
	
		System.out.println("This is my first Epicode Java Project!");
		System.out.println(moltiplicazione(5, 5));
		System.out.println(concatena("Ciao sono Marco di anni ", 30));

		////////////////////////////////
		
		String arrStr[] = {"Ciao","sono","Marco","da","Palermo",};
		String stringaDue = "Tumminia";
		System.out.println(inserisciInArray(arrStr, stringaDue));
		
		////////////////////////////////
		
		System.out.println(perimetroRettangolo(0.8, 0.5));
	
		////////////////////////////////
		
		System.out.println(pariDispari(87));
		
		////////////////////////////////
		
		System.out.println(perimetroTriangolo(0.7, 0.8, 0.9));
		
		////////////////////////////////
		
		Scanner input = new Scanner (System.in);
		System.out.println("inserisci il tuo nome");
		String name = input.nextLine();
		System.out.println("inserisci il tuo cognome");
		String cognome = input.nextLine();
		System.out.println("inserisci la tua città di provenienza");
		String città = input.nextLine();
	
		System.out.println(name + cognome + città);
		System.out.println(città + cognome + name);
		
		///////////////////////////////
		
		
		
		}

		

		

///////////////////////////////////////////////////////////////////
public static int moltiplicazione(int intero1, int intero2) {
	return intero1*intero2;	
	
}



public static String concatena(String testo1, int numero1) {
	return testo1 + numero1;
}



public static String inserisciInArray (String[] array, String testoDaInserire) {
	
	String newArray[] = new String[6];
	
	newArray[0] = array[0];
	newArray[1] = array[1];
	newArray[2] = array[2];
	newArray[3] = testoDaInserire;
	newArray[4] = array[3];
	newArray[5] = array[4];
	
	return Arrays.toString(newArray);

}


public static double perimetroRettangolo (double l1, double l2) {
	return (l1*2) + (l2*2);
}


public static String pariDispari (int num) {
	if (num % 2 == 0) {
		return ("0");
	} else {
		return ("1");
	}
}

public static double perimetroTriangolo (double l3, double l4, double l5) {
	
	double semiPerimetro = (l3 + l4 + l5)/2;
	
	return Math.sqrt(semiPerimetro*(semiPerimetro-l3)*(semiPerimetro-l4)*(semiPerimetro-l5));

}


}



