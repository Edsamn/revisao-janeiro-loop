// Exercício 3
// Faça um programa que pergunte um número que deseja verificar. Se o
// número número for maior que zero e menor que vinte, imprima no console
// os números que não são múltiplos de 3 , que não seja múltiplo de 4 e nem
// de 3 e quatro concomitantemente. Se o número número form maior que
// vinte e menor ou igual a trinta, imprima no console os números que não
// são múltiplos de 2 , que não seja múltiplo de 6 e nem de 2 e seis
// concomitantemente.Se o número número form maior que trinta, imprima
// no console os números que não são múltiplos de 5 , que não seja múltiplo
// de 8 e nem de 5 e oito ao mesmo tempo .

// 1. Pseudo-código;
// 2. Fluxograma (diagrama) , representando o código;
// 3. O código executando com os resultados desejados.

let numero = Number(prompt("Qual número deseja verificar?"));

if (numero > 0 && numero <= 20) {
  for (let i = 1; i <= numero; i++) {
    if (i % 3 !== 0 && i % 4 !== 0) {
        console.log(i);
    }
  }
} else if (numero > 20 && numero <= 30) {
  for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0 && i % 6 != 0) {
        console.log(i);
    }
  }
} else {
  for (let i = 0; i <= numero; i++) {
    if (i % 5 != 0 && i % 8 != 0) {
        console.log(i);
    }
  }
}
