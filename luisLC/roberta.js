function cadastro(x) {
    cont =+ document.getElementById('nmrcao').innerHTML
    if (cont == '1') {
        var cadastror = []
    }
    cadastror[cont-1] = x;
    cont++
    document.getElementById('nmrcao').innerHTML =+ cont
    document.getElementById('mostrar').innerHTML = cadastror
}