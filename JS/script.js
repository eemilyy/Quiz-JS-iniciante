/*var nome = window.prompt("Qual seu nome");
var idade = window.prompt("Sua idade:");
window.alert(`A ${nome} tem ${idade} anos`);
console.log(nome.length);*/

var clicou = window.document.getElementById('submit');
clicou.addEventListener('click', nomear);


function nomear(){
    var nome = window.document.getElementById('nomeJogador').value;
    //var nome = String(caixaNome.value);
    //console.log(Number(nome));

    if(!isNaN(nome)){  //verificar pois aceita numeros com letras
        window.alert("Digite apenas letras!");
    }

    var para = window.document.querySelector('#texto');
    para.innerHTML = `Bem vinda ${nome}`;
}