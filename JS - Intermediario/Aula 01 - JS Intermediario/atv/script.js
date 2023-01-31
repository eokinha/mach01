let lista = ['Sem cadastro', 'Leite', 'Ovo', 'Farinha', 'Milho', 'Café']
let codigo = prompt('Insira o codigo do produto que deseja')

if (codigo < 1 || codigo > lista.length - 1) {
    alert(lista[0])
    let novoProduto = ''
    novoProduto = prompt('Deseja adicionar um novo produto ? S / N')

    if (novoProduto.toLowerCase() == 's') {
        lista.push(prompt('Informe o nome do produto: '));
        alert(`Produto ${lista.length - 1} adicionado com sucesso!`)
    } else {
        alert('Volte sempre!')
    }
} else {
    alert(`Produto ${lista[codigo]}`)
}


