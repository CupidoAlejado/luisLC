//function pra mostrar o compare (maior menor que 5)
function showcompare() {
    document.getElementById('compare').style = 'display: block;'
    document.getElementById('matematica').style = 'display: none;'
    document.getElementById('quiz').style = 'display: none;'
    document.getElementById('cadastro').style = 'display: none;'
}
//function pra mostrar a matemática (:,x,+,-) do valor escolhido
function showmatematica() {
    document.getElementById('compare').style = 'display: none;'
    document.getElementById('matematica').style = 'display: block;'
    document.getElementById('quiz').style = 'display: none;'
    document.getElementById('cadastro').style = 'display: none;'
}
//function pra mostrar o quiz (completamente não relacionado com a aula, feito por diversão)
function showquiz() {
    document.getElementById('compare').style = 'display: none;'
    document.getElementById('matematica').style = 'display: none;'
    document.getElementById('quiz').style = 'display: block;'
    document.getElementById('cadastro').style = 'display: none;'
}
//function pra mostrar o cadastro (vetor com nome e telefone) + cpf
function showcadastro() {
    document.getElementById('compare').style = 'display: none;'
    document.getElementById('matematica').style = 'display: none;'
    document.getElementById('quiz').style = 'display: none;'
    document.getElementById('cadastro').style = 'display: block;'
}
//function para esconder todos os elementos.
function hide() {
    document.getElementById('compare').style = 'display: none;'
    document.getElementById('matematica').style = 'display: none;'
    document.getElementById('quiz').style = 'display: none;'
    document.getElementById('cadastro').style = 'display: none;'
}