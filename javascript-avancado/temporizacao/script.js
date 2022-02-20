function acao(){
    document.write("Executou... <br>");
}

//colocando a função acao para realizar de 2 em 2seg
var timer = setInterval(acao, 2000);

//executa apenas uma vez, em 2seg
//setTimeout(acao, 2000);