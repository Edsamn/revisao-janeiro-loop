let numero = Number(prompt('Numero?'));
let i = 0;

if (confirm('Quer imprimir?') === true) {
    while (i <= numero) {
        console.log(i)
        i++
    } 
} else {
    console.log('Você não digitou um número');
}