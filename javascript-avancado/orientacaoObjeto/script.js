function Animal(){
    //propriedades
    this.raca = "Cão";
    this.nome = "lulu";
    this.idade = 200;
    this.peso = 10;

    //ações
    this.fazerXixi = function(){
        console.log("xiiiiiiiiiiii...");
    }

    this.comer = function(kg){
        for(var i=0; i < kg; i++){
            this.mastigar(i);
        }
        console.log("Hmmm...");
        this.peso = this.peso + (kg/2);
    }

    this.mastigar = function(i){
        console.log(i+" - Nhoc...");
    }


}//objeto Animal

//criando objeto
var lulu  = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";
lulu.comer(10);

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";