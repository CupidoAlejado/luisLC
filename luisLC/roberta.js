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

function limpartela() {
    document.getElementById('mostrar').innerHTML = ""
}

function captcha(x) {
    finar = []
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let cont = 0; cont < 7; cont++) {
    finar[cont] = caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    finarreceba = finar.join("")

}