function texto(x) {
    if (x !== "") {
        l = + document.getElementById('nmrcao').innerHTML
        if (l == "1") {
            x = [x + " é o seu nome?"]
        }
        else if (l == "2") {
            x = [x + " é a sua idade?"]
        }
        else if (l == "3") {
            x = [x + " é o seu estado civil?"]
        }
        else if (l == "4") {
            x = [x + " é o seu Email?"]
        }
        else if (l == "5") {
            x = [x + " é o seu nível de escolaridade?"]
        }
        else if (l == "6") {

            x = [" Tem certeza disso?"]
        }

        document.getElementById('sim').value = "Sim"
        //document.getElementById('sim').onclick = "salvar(x = document.getElementById('textob').value)"
        document.getElementById('nao').value = "Não"
        document.getElementById('sim').style = "background-color: green;"
        document.getElementById('nao').style = "background-color: red;"
        document.getElementById('sim').class = "botao"
        document.getElementById('nao').class = "botao"
    }
    else {
        l = + document.getElementById('nmrcao').innerHTML
        if (l == "1") {
            x = "Insira seu nome"
        }
        else if (l == "2") {
            x = "Insira sua idade"
        }
        else if (l == "3") {
            x = "Informe seu Estado Civil"
        }
        else if (l == "4") {
            x = "Informe o Email para cadastro"
        }
        else if (l == "5") {
            x = "Qual é o seu nível de escolaridade?"
        }
        else if (l == "6") {
            x = "O Gojo volta?"
        }
        document.getElementById('sim').value = " "
        document.getElementById('nao').value = " "
        document.getElementById('sim').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('sim').class = "nada"
        document.getElementById('nao').class = "nada"
        document.getElementById('textob').value = ''
    }
    document.getElementById('bobor').innerHTML = x
}
function salvar(x) {
    cont = document.getElementById('nmrcao').innerHTML
    if (cont == "1") {
        a = []
    }
    CheckNum = + x / 2
    if (cont == "2" && CheckNum == NaN) {
        alert('ayyyyy')
    }
    a[cont - 1] = x
    cont++
    x = null
    if (cont < 7) {
        document.getElementById('nmrcao').innerHTML = + cont
        document.getElementById('textob').value = null
        document.getElementById('mostrar').innerHTML = a
        document.getElementById('mostrar1').innerHTML = a
        texto('')
    }
    else {
        document.getElementById('textob').value = null
        document.getElementById('mostrar1').innerHTML = null
        document.getElementById('mostrar').innerHTML = null
        texto('')

    }
}

function matematica(x) {
    y = document.getElementById('x2').value
    if (x === '' || y === '') {
        alert('Preencha os dois campos')
        return false;
    }
    x = +x
    y = +y
    var divisao = x / y
    var soma = x + y
    var multi = x * y
    var sub = x - y
    final = ["a divisão é: " + divisao + "", "<br> a multiplicação é: " + multi + " ", "<br> a soma é: " + soma + " ", "<br> a subtração é: " + sub + "<br> "]
    document.getElementById('matematicar').innerHTML = final
    x = ''
}





//cadastro gay






function salvar(textoc,textod) {
    cont = document.getElementById('nmrcao').innerHTML
    if (cont == "1") {
        a = []
    }
    a[cont - 1] = textoc +" - "+ textod
    cont++
    textoc = null
    textod = null
    if (cont < 7) {
        document.getElementById('nmrcao').innerHTML = + cont
        document.getElementById('textoc').value = null
        document.getElementById('textod').value = null
        document.getElementById('mostrar').innerHTML = a
    }
}