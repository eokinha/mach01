let cpfDigitado = []

for (let i = 0; i < 5; i++) {
    let cpf = prompt('Digite o seu CPF sem pontos ou traço')
    cpfDigitado.push(cpf);
}

function validarCpf(cpf) {
    if (cpf.length === 11 && !isNaN(cpf)) {
        return true;
    } else {
        return false;
    }
}

function formataCpf(cpf = []) {
    let formatacaoCpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
    return formatacaoCpf
}

function exibirCPF(cpf) {
    for (let i = 0; i <= cpf.length; i++) {
        if (validarCpf(cpf[i])) {
            alert(`${formataCpf(cpf[i])} é um CPF valido`)
        } else {
            alert(`${formataCpf(cpf[i])} é um CPF invalido`)

        }
    }
}

exibirCPF(cpfDigitado)



