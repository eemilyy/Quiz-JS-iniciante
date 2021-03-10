var botoes = document.querySelectorAll('input[type="button"]');
for (var i = 0; i < botoes.length; i++){
  botoes[i].addEventListener('click', function(){
       // e aqui, o this é o botão clicado
       var resposta = this.id;
       if(resposta !== 'r1'){
           window.document.getElementById(resposta).style.background = "red";

           botoes.disable = true;

           setTimeout(function() { //colocando tempo para poder executar a chamada da proxima pag
            window.location.href = "q3.html";
        }, 1000);
       }
       else{
            window.document.getElementById(resposta).style.background = "green";

            setTimeout(function() { //colocando tempo para poder executar a chamada da proxima pag
                window.location.href = "q3.html";
            }, 1000);
       }
  });
}