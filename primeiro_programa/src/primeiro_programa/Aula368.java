package primeiro_programa;

import java.util.Scanner;

public class Aula368 {

	public static void main(String[] args) {
		Scanner ler= new Scanner(System.in);
	/*	int num1;
		System.out.println("Verificar numeros anteriores sao pares");
		System.out.println("Digite um numero");
		num1 = ler.nextInt();
		
		for(int i=0; i < num1; i++) {             exerc1
			
			
			if (i%2==0) {
				System.out.println(i);
			}
		}
		/*---------------------------------*/
		
		/*int num2 =0;
		
		for(int i=0; i < 15; i++) {          exerc 2
			num2 = num2+ i ;
			System.out.println(num2);
		}*/
		
		
		/*------------------------------------*/
		/*int num1;
		int result=0;
		System.out.println("Digite um numero");
		num1 = ler.nextInt();
		
		for(int i=0; i < num1; i++) {
			
			if (i%2 ==0) {
			    result = i + result;         exerc 3
				 
			}
			
			
		}
		System.out.println("A soma dos valores é " + result); */
		
		/*-------------------------------------------*/
		
		int idade;
		int resultado=0;
		int media=0;
		
		for (int i = 0; i < 3 ; i++) {
			System.out.println("Digite a idade");
			idade = ler.nextInt();
			
			
			resultado =resultado+idade;              //exerc 4
			media = resultado / 3;
			
			
		}
		System.out.println("A soma de idades lidas foi: " + resultado + " e a média é de: " + media);
	}
	


}
