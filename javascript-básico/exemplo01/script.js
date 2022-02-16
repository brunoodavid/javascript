function verificar(){
    var num1 = document.getElementById("num1").innerHTML;
    var num2 = document.getElementById("num2").value;

    if(num1 == num2){
        alert("Você acertou!");
    } else {
        alert("Você errou!");
    }

    resetar();
}

function resetar(){
    document.getElementById("num2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("num1").innerHTML = r;
}