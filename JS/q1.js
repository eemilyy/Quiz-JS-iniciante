/*function questao1(valor){
    if(valor !== 'Brasília'){
        console.log("Errado!");
    }
}*/

var clicou = document.querySelector("#q1");

function q(){
    var r = window.document.querySelector(".botao").value;
    console.log(r);
}

clicou.addEventListener("click", q);