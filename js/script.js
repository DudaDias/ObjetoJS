
var nome;
var idade;

var alt;
var peso;
var nomei;

var nomec;
var palavras;


function calcaps(){

var aposentadoria = new Object();
aposentadoria.nome = document.CalcApos.nome.value,
aposentadoria.idade =  document.CalcApos.idade.value,
aposentadoria.cont =  0


if(aposentadoria.idade >= 65){

    alert(`Já está aposentado`)
}

else if(aposentadoria.idade < 0){

    alert(`error, idade inválida`)
}

else{

    aposentadoria.cont = (65 - aposentadoria.idade);

    alert(`Ainda faltam: ${aposentadoria.cont} anos para você se aposentar `)

   // alert(` Seu nome: ${aposentadoria.nome} Sua idade: ${aposentadoria.idade}`);
}
               
    
}
    
function calcImc(){

var imc = new Object();
imc.nomei = document.CalcIMC.nomei.value,
imc.alt =  document.CalcIMC.alt.value
imc.peso = document.CalcIMC.peso.value

if(imc.peso > 15){

    alert(`ta  abaixo do peso!!`)
}

else{

    alert(`ta acima do peso`)
}

}

function invert(){

    var inv = new Object();

    
    }
    




