//esse .js contém os códigos da parte do CPF

//function que gera uma pessoa (CPF) aleatória. (feito extracurricularmente apenas por diversão)
function pessoa(x) {
    cpfv = []
    for (cont = 0 ; cont < 11 ; cont++){
        cpfv[cont] = Math.floor(Math.random()*10)
    }
    cpflaele = cpfv.join("")
    document.getElementById('textopessoa').value = cpflaele
}

//function que verifica se o texto inserido é um cpf ou não (verifica se são 11 dígitos.)
function cpf(str) {
    if (str.length != 11) {
        alert('nao é cpf mano') 
        document.getElementById('textopessoa').value = ''       
    } else {
        alert('é cpf mano 👍')
    }
}
//function que verifica de qual estado é o cpf inserido.
function estador(x) {
    
}