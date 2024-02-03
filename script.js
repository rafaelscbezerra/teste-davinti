// Teste para Seleção - Desenvolvimento

// Candidato: RAFAEL SILVA CANUTO BEZERRA Data: 31/01/2024

// TESTE LÓGICO - INSIRA O TEMPO USADO NA RESOLUÇÃO CADA QUESTÃO.

// 1- Avalie se as afirmações são verdadeiras ou falsas. Sendo que A=10, B=2 e C=8. - 5 minutos
// a) (A+B) = C (FALSO)
// b) (A-C) = B (VERDADEIRO)
// c) (A*C) < B (FALSO)
// d) (A*B) = A (FALSO)
// e) (A-B) = C (VERDADEIRO)

// 2- Avalie se as afirmações são verdadeiras ou falsas. - 5 minutos
// X = 2, Y=3 e Z=5.
// a) (((X+Y)>=Z) and (X>Y)) (FALSO)
// b) (((X+Y)>=Z) or (X>Y)) (VERDADEIRO)
// c) ((Z<Y) and ((Z-Y)=X)) (VERDADEIRO)
// d) ((X=Y) or (X<Y)) (VERDADEIRO)
// e) (((X+Y)=Z) and (Z>Y) and ((X-Y)=Z)) (FALSO)

// 3- Mostre as saídas para as devidas entradas: - 10 minutos

// Entrada 1: a=3 e b=4 = 1.33
// Entrada 2: a=0 e b=3 = 0 ou não há raiz real
// Entrada 3: a=3 e b=9 = 3

// 4- Mostre as saídas para as devidas entradas: - 10 minutos

// principal ()
// ler m, n;
// r = 0;
// enquanto n != 0 faça
// r = r + m;
// n = n-1;
// fim do enquanto
// imprimir r;
// fim de principal

// Entrada 1: n=5 e m=3 = 15
// Entrada 2: n=0 e m=100001 = 0
// Entrada 3: n=3 e m=15 = 45

// 5- Escreva um algoritmo que leia 400 números e imprima o maior, o menor e a
// média dos números lidos. - 30 minutos

function encontrarMaiorMenorEMedia() {
  let numeros = [];

  for (let i = 1; i <= 400; i++) {
    numeros.push(i);
  }

  let maior = numeros[0];
  let menor = numeros[0];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
    soma += numeros[i];
  }

  let media = soma / 400;

  console.log("O maior número é: " + maior);
  console.log("O menor número é: " + menor);
  console.log("A média dos números é: " + media);
}

encontrarMaiorMenorEMedia();

// 6- Escreva um algoritmo que leia seis números e os imprima em ordem crescente. - 15 minutos

function ordenarNumeros() {
  let numeros = [5, 2, 4, 1, 3, 6];

  numeros.sort(function (a, b) {
    return a - b;
  });

  console.log("Números em ordem crescente:", numeros.join(", "));
}

ordenarNumeros();
