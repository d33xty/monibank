export default function validacaoIdade(campo){
    const data = new Date(campo.value);
    if (!validaIdade(data)) {
        campo.setCustomValidity(true)
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18,data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
}