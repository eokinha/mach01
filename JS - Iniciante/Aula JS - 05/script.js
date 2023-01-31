// Cachorro /  Gato / Coelho - Banho e Tosa / Ração
// Cavalo / Cabra / Jumento - Veterinário especializado / Ração
// Ratos - Gaoilas especiais / Ração
// Passarinhos - Implante de rastreador / Ração

let animalCliente = prompt('Qual o seu animal de estimação ?')

switch (animalCliente.toLowerCase()) {
    case 'cachorro':
    case 'gato':
    case 'coelho':
        alert('Temos banho e tosa e ração para o seu animal')
        break
    case 'cavalo':
    case 'cabra':
    case 'jumento':
        alert('Temo um atendimento especializado e também vendemos ração para o seu animal')
        break
    case 'ratos':
        alert('Temos gaiolas especiais e ração para o seu animal')
        break
    case 'passaro':
        alert('Temos implante de rastreador e ração para o seu animal')
        break
    default:
        alert(`Perdão, não temos produtos para ${animalCliente}`)

}