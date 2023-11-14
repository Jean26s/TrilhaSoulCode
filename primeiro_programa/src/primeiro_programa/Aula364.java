package primeiro_programa;

import java.util.Scanner;

public class Aula364 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int numero;
		int n1, n2;
		int idade;
		char letra;
		
		//
		
		System.out.println("Digite um numero que vou dizer se é par ou impar");
		numero = scan.nextInt();
		
		if( numero%2 == 0) {
			System.out.println("O numero é par");
		}else {
			System.out.println("O numero é impar");
		}
	/*-------------------------------------------------------------------*/
		
		System.out.println("Digite um numero");
		n1 = scan.nextInt();
		System.out.println("Digite o segundo numero");
		n2 = scan.nextInt();
		if( n1 > n2) {
			System.out.println("O primeiro numero digitado é maior que o segundo");
		}else {
			System.out.println("O segundo numero digitado é maior que o primeiro");
		}
		/*-------------------------------------------------------------------*/
		
		System.out.println("Verificar se você é maior ou menor de idade");
		idade = scan.nextInt();
		
		if ( idade >= 18 ) {
			System.out.println("Você é maior de idade");
		}else {
			System.out.println("Você é menor de idade");
		}
/*--------------------------------------*/
		
		System.out.println("Digite uma letra para verificar se ela é vogal");
		letra = scan.next().charAt(0);
		
		if ( letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ) {
			System.out.println("A letra digitada é vogal.");
		}else {
			System.out.println("A letra digitada não é uma vogal.");
		}
	}

}
