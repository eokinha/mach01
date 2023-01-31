// var primeiraVariavel = ''; //Forma não ideal de declarar uma variavel (nao respeita escopo)
// let segundaVariavel = ''; //Forma ideal de declarar uma variavel (obedece escopo)
// const terceiraVariavel = ''; //Para Variaveis que possuem uma constante (ex: dias da semana)


// { //Supermercado
//     let cocaCola = 2.50;
//     console.log('Supermercado', cocaCola)


//     {//Lanchonete do supermercado
//         let cocaCola = 5.50
//         console.log('Lanchonete', cocaCola)
//     }
// }

// alert('Vão legalizar, a erva da jamaica')

// let textoDigitado = prompt ('Digite alguma coisa usuario')


//SOMAR DOIS NUMEROS INTEIROS
/*
1 - Adquirir as entradas
2 - armazenar as entradas
3 - realizar a soma
4 - exibir o resultado
*/

let recebePrimeiroNumero = Number(prompt('Digite o primeiro numero:'))
let recebeSegundoNumero = Number(prompt('Digite o seu segundo numero'))
let Soma = recebePrimeiroNumero + recebeSegundoNumero
console.log('Soma', Soma)