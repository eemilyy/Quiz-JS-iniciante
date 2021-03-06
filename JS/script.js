/*var nome = window.prompt("Qual seu nome");
var idade = window.prompt("Sua idade:");
window.alert(`A ${nome} tem ${idade} anos`);
console.log(nome.length);*/

var clicou = window.document.getElementById('botao');
//var clicou = getElementById('botao');
clicou.addEventListener('click', nomear);


function nomear(){
    var caixaNome = window.document.getElementById('nomeJogador');
    var nome = String(caixaNome.value);
    console.log(nome);
    var para = window.document.querySelector('#texto');
    para.innerHTML = `Bem vinda ${nome}`;
}