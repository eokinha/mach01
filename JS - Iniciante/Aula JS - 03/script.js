//Aula de manipulação de strings

//

// let  = "5"
// console.log('Texto:', texto)
// console.log('Tipo da variavel', typeof texto)

// let titulo = 'Aula de JS'
// let descricao = 'Aula de JS falando sobre textos.'


// Concatenando utilizando caracteres de scape

let texto = 'Aula de js'
// Jeito
texto = '${texto} Aula de JS falando sobre textos.'
console.log('Texto:', texto)
console.log('Tipo da variavel', typeof texto)




//CONCATENANDO TEXTO COM OUTROS TIPOS DE DADOS
/*
Media simples
ALUNO       NOTA1   NOTA2   NOTA3   MEDIA
CLEYTON       5       8      10

Notação matematica
Media = (N1 +N2 + N3) / 3

*/
//Recebendo as notas
let NOTA1 = 5
let NOTA2 = 8
let NOTA3 = 10
//Calcular a media
let MEDIA = (NOTA1 + NOTA2 + NOTA3) / 3

//EXIBIR MEDIA NO CONSOLE
console.log(MEDIA)

let mensagem = `A media do cleyton é ${MEDIA}`

console.log(mensagem)


let tipoNavegador = 'mozilla'
console.log('tamanho da string', tipoNavegador.length)
//pegando um pedaco do texto
console.log(tipoNavegador.slice(0,3))
//FICOB2530 - Ex: Codigo de cliente composto
//Transformar meu texto em maiusculo
console.log(tipoNavegador.toUpperCase)
console.log(tipoNavegador.toLowerCase)