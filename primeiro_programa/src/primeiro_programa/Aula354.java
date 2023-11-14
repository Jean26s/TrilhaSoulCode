package primeiro_programa;

import java.util.Scanner;

public class Aula354 {

	public static void main(String[] args) {
		
	
		Scanner scan = new Scanner(System.in);
		int n1, n2, resultado,resultado_multi,resultado_sub;
		
		System.out.println("Digite um numero ");
		n1 = scan.nextInt();
		
		System.out.println("Digite o segundo numero");
		n2 = scan.nextInt();
		
		resultado = n1 + n2;
		System.out.println("O resultado da variavel é = "+ resultado);
		
		resultado++;
		System.out.println("O incremento da variavel é = "+ resultado);
 
		resultado--;
		System.out.println("O decremento da variavel é = "+ resultado);
		
		/*-------------------------------------------------*/
		
		System.out.println("Vamos realizar a soma, mutiplicação e subtração");
		
		System.out.println("Digite um numero ");
		n1 = scan.nextInt();
		
		System.out.println("Digite o segundo numero");
		n2 = scan.nextInt();
		
		resultado = n1 + n2;
		System.out.println("O resultado da soma da variavel é = "+ resultado);
		
		resultado_multi = n1 * n2;
		System.out.println("O resultado da mutiplicação da variavel é = "+ resultado_multi);
		
		resultado_sub = n1 - n2;
		System.out.println("O resultado da subtração da variavel é = "+ resultado_sub);
		
		/*---------------------------------------------------*/
		
		int numero1, numero2, numero3, result1;
		//
		System.out.println("Vamos Calcular resultado de 3 numeros ");
		
		System.out.println("Digite um numero ");
		numero1 = scan.nextInt();
		
		System.out.println("Digite o segundo numero");
		numero2 = scan.nextInt();
		
		System.out.println("Digite o terceiro numero");
		numero3 = scan.nextInt();
		
		result1 = numero1 + numero2 + numero3;
		System.out.println("O resultado da soma da variavel é = "+ result1);

	}

}
