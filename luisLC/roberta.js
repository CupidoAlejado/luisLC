//function que insere os dados no vetor cadastro
function cadastro(x) {
    //essa function ficou meio junta com o quiz, então as respostas do quiz e o número em cima da pergunta do
    //quiz ficaram na mesma function (lembrando que o quiz é extracurricular e feito por diversão)
    cont =+ document.getElementById('nmrcao').innerHTML
    if (cont == '1') {
        var cadastror = []
    }
    cadastror[cont-1] = x;
    cont++
    document.getElementById('nmrcao').innerHTML =+ cont
    //mostrar é o h3 que mostra os dados (vetor) do cadastro
    document.getElementById('mostrar').innerHTML = cadastror
}
//function pra limpar tela (bem autoexplicativa)
function limpartela() {
    document.getElementById('mostrar').innerHTML = ""
}
//function pra simular um captcha no final do cadastro (não terminada 01/07/2024)
function captcha(x) {
    finar = []
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let cont = 0; cont < 7; cont++) {
    finar[cont] = caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    finarreceba = finar.join("")

}