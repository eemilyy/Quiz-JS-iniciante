/*function questao1(valor){
    if(valor !== 'Brasília'){
        var resposta = window.document.querySelectorAll("input").;
        document..style.background = "green";
    }
}*/

/*var clicou = document.querySelector("#q1");

function q(){
    var r = window.document.querySelector(".botao").value;
    console.log(r);
}

clicou.addEventListener("click", q);*/

var botoes = document.querySelectorAll('input[type="button"]');
for (var i = 0; i < botoes.length; i++){
  botoes[i].addEventListener('click', function(){
       // e aqui, o this é o botão clicado
       var resposta = this.id;
       if(resposta !== 'r3'){
           window.document.getElementById(resposta).style.background = "red";
       }
       else{
            window.document.getElementById(resposta).style.background = "green";
            
       }
       //var classes = this.classList;
  });

  
}