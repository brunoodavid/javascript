

function somar(){
    //parseInt está transformando a string em um número inteiro
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var soma = campo1 + campo2;
    alert("A soma é "+soma);
}

function subtrair(){
    var campo1 = parseInt(document.getElementById("campo3").value);
    var campo2 = parseInt(document.getElementById("campo4").value);
    var subtrair = campo1 - campo2;
    alert("A subtração é "+subtrair);
}

function multiplicar(){
    var campo1 = parseInt(document.getElementById("campo5").value);
    var campo2 = parseInt(document.getElementById("campo6").value);
    var multiplicar = campo1 * campo2;
    alert("A multiplicação é "+multiplicar);
}

function dividir(){
    var campo1 = parseInt(document.getElementById("campo7").value);
    var campo2 = parseInt(document.getElementById("campo8").value);
    var dividir = campo1 / campo2;
    alert("A divisão é "+dividir);
}