let letra = prompt('Digite uma letra do alfabeto:')
letra = letra.toLowerCase()
if (!isNaN(letra)) {
    alert('Deve digitar uma letra do alfabeto para obter o resultado')
}
else if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    alert('Letra digitada e uma vogal')
} else {
    alert('A letra digitada e uma consoante')
}
