function pessoa(x) {
    cpfv = []
    for (cont = 0 ; cont < 11 ; cont++){
        cpfv[cont] = Math.floor(Math.random()*10)
    }
    cpflaele = cpfv.join("")
    document.getElementById('textopessoa').value = cpflaele
}

function cpf(str) {
    if (str.length != 11) {
        alert('nao é cpf mano') 
        document.getElementById('textopessoa').value = ''       
    } else {
        alert('é cpf mano 👍')
    }
}

function estador(x) {
    
}