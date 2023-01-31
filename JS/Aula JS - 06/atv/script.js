//Reciclagem a cada 2 anos
//Receber a informação de quantos anos o piloto esta vinculado a escola
// Devolver o numero de recliclagens que o piloto já participou
//

let tempoPiloto = prompt('Há quantos anos você pilota nosso avião ?')

if (isNaN(tempoPiloto)) {
    alert('Por favor, insira um numero')
} else {
    let mensagem = ``
    let reciclagem = 0
    cont = 0
    while (cont <= tempoPiloto) {
        if (tempoPiloto < 2) {
            mensagem = 'Usuario ainda não tem o tempo minimo de 2 anos'
        } else {
            mensagem = `Usuario ja realizou ${reciclagem} reciclagens`
            reciclagem++
        }
        cont += 2
    }
    alert(mensagem)
}
