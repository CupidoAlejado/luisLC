function texto(x){
    if (x !== null) {
        x = [x+" é o seu nome?"]
    }
    document.getElementById('bobor').innerHTML = x
}

function matematica(x){
    y =+ document.getElementById('x2').value
    var divisao= x / y
    var soma = x + y
    var multi = x * y
    var sub = x - y
    final = ["a divisão é: "+divisao+"","<br> a multiplicação é: "+multi+" ","<br> a soma é: "+soma+" ","<br> a subtração é: "+sub+"<br> "]
    document.getElementById('matematicar').innerHTML = final
}