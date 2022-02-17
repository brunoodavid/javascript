function addBola(){

    // Criando uma <div class="bola"></div> no js
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    
    //criando numeros aleatorios para as minhas posicoes
    var posicao1 = Math.floor(Math.random() * 500);
    var posicao2 = Math.floor(Math.random() * 400);

    var cor = Math.floor(Math.random() * 999999);

    bola.setAttribute("style","left:"+posicao1+"px;top:"+posicao2+"px; background-color: #"+cor);
    // Criando <div style="left: (algum numero); top: (algum numero);"></div>

    //atribuindo um evento na div
    bola.setAttribute("onclick","estourar(this)");

    //adicionando conteudo para o html
    document.body.appendChild(bola);

}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciarJogo(){
    setInterval(addBola, 500); //1000 milisegundos
}