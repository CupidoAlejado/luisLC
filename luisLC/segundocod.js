function texto(x){
    if (x !== "") {
        x = [x+" é o seu nome?"]
        document.getElementById('sim').value = "Sim"
        //document.getElementById('sim').onclick = "salvar(x = document.getElementById('textob').value)"
        document.getElementById('nao').value = "Não"
        document.getElementById('sim').style = "background-color: green;"
        document.getElementById('nao').style = "background-color: red;"
        document.getElementById('sim').class = "botao"
        document.getElementById('nao').class = "botao"
    }
    else{
        x = "insira seu nome"
        document.getElementById('sim').value = " "
        document.getElementById('nao').value = " "
        document.getElementById('sim').style = "background-color: transparent; border: 0px;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px;"
        document.getElementById('sim').class = "nada"
        document.getElementById('nao').class = "nada"
        document.getElementById('textob').value = ''
    }
    document.getElementById('bobor').innerHTML = x
}
function salvar(x){
    a[cont-1] = x
    x = null
    cont++
    document.getElementById('nmrcao').innerHTML = cont
    document.getElementById('textob').value = null
    document.getElementById('mostrar').innerHTML = a + a
}

function matematica(x){
    y=document.getElementById('x2').value
    if (x === '' || y === '') {
        alert('Preencha os dois campos')
        return false;
    }
    x=+x
    y=+y
    var divisao= x / y
    var soma = x + y
    var multi = x * y
    var sub = x - y
    final = ["a divisão é: "+divisao+"","<br> a multiplicação é: "+multi+" ","<br> a soma é: "+soma+" ","<br> a subtração é: "+sub+"<br> "]
    document.getElementById('matematicar').innerHTML = final
    x = ''
}