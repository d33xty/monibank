export default function ehUmCpf(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumeros(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity(true);
    }
}

function validaNumeros(cpf){
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ]
    return numeroRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf){
    var soma = 0;
    var multiplicador = 10;
    for (let index = 0; index < 9; index++) {
        soma += cpf[index] * multiplicador;
        multiplicador--; 
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 1) {
        soma = 0;
    }
   
    return soma != cpf[9];
}
function validaSegundoDigito(cpf){
    var soma = 0;
    var multiplicador = 11;
    for (let index = 0; index < 10; index++) {
        soma += cpf[index] * multiplicador;
        multiplicador--; 
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[10];
}