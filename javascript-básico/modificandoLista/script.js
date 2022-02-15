function adicionarIngrediente(){

    var ing = document.getElementById("ingrediente").value; //value pega o ingrediente digitado pelo usuario
    
    //pegando conteudo da lista e colocando na variavel listaHtml
    var listaHtml = document.getElementById("lista").innerHTML;

    //adicionando oq o usuario digitar na listaHtml
    listaHtml = listaHtml + "<li>"+ing+"</li>";

    //selecionando a lista novamente e definindo um conteudo pra ela
    document.getElementById("lista").innerHTML = listaHtml;
}