function cadastro(x) {
    cont = document.getElementById('nmrcao').innerHTML
    if (cont == '1') {
        var cadastror = []
    }
    cadastror[cont-1].push(x);
    document.getElementById('mostrar').innerHTML = cadastror
}