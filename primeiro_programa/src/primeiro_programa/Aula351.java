package primeiro_programa;

import java.util.Scanner;

public class Aula351 {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
	  
		String SoulON;
		int numero1 = 4;
		double num2 = 3.1;
		boolean ligado = false;
		
		String nome;
		String sobrenome;
		
		
		System.out.println("Digite seu nome");
		nome = ler.next();
		
		System.out.println("Digite seu sobrenome");
		sobrenome = ler.next();
		
		System.out.println("Seu nome inteiro é: " + nome + " "  + sobrenome);
		
		
	}

}
