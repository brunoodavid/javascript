function validar(){
    var valor = document.getElementById("numero").value;

    if(valor.length < 2 || valor.length > 2){
        alert("Você digitou um número diferente de 2 algarismos");
        return false;
    } else {
        return true;
    }
}