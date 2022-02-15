function tabuada(){

    var num = parseInt(document.getElementById("campo").value);
    var listaHtml = document.getElementById("lista").innerHTML;

    for(x=0; x<=10; x++){
       var tabuada = num * x;

        listaHtml = listaHtml + "<li>" + num +"x" + x + "=" + tabuada +"</li>";
        document.getElementById("lista").innerHTML = listaHtml;
    }

    


}