let cpfDigitado = prompt(`Insira seu CPF`)

function validarCpf(cpf) {
    if (cpf.length === 11 && !isNaN(cpf)) {
        return true;
    } else {
        return false;
    }
}

function formataCpf(cpf) {
    let formatacaoCpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
    return formatacaoCpf
}

function exibeCpf(cpf) {
    if (validarCpf(cpf)) {
        alert(formataCpf(cpf))

    } else {
        alert('CPF Invalido')
    }
}

exibeCpf(cpfDigitado)


// console.log(exibeCpf('07273977535'))