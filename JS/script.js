/*var nome = window.prompt("Qual seu nome");
var idade = window.prompt("Sua idade:");
window.alert(`A ${nome} tem ${idade} anos`);
console.log(nome.length);*/

var clicou = window.document.getElementById('botao');
clicou.addEventListener('click', nomear);


function nomear(){
    var caixaNome = window.document.getElementById('nomeJogador').value;
    //var nome = String(caixaNome.value);
    console.log(caixaNome);
    var para = window.document.querySelector('#texto');
    para.innerHTML = `Bem vinda ${caixaNome}`;
}