
var nome;
var idade;

var alt;
var peso;
var nomei;

var nomec;
var palavras;
var calc;


function calcaps(){

    var aposentadoria = new Object();
    aposentadoria.nome = document.CalcApos.nome.value,
    aposentadoria.idade =  document.CalcApos.idade.value,
    aposentadoria.cont =  0


    if(aposentadoria.idade >= 65){

        alert(`OLá ${aposentadoria.nome} \nJá está aposentado(a)`)
    }

    else if(aposentadoria.idade < 0){

        alert(`error, idade inválida`)
    }

    else{

        aposentadoria.cont = (65 - aposentadoria.idade);

        alert(`Olá ${aposentadoria.nome} \nAinda faltam ${aposentadoria.cont} anos para você se aposentar`)

    }
    
}
    
function calcImc(){

    var imc = new Object();
    imc.nomei = document.CalcIMC.nomei.value,
    imc.alt =  document.CalcIMC.alt.value,
    imc.peso = document.CalcIMC.peso.value,
    imc.calc = (imc.peso / (imc.alt * imc.alt))


            if(imc.calc < 17){

                alert(`[ALERTA]: Você está MUITO abaixo do peso!!\nPrecisa se exercitar e melhorar sua alimentação`)
            }

            if(imc.calc >= 17 && imc.calc <= 18.49) {

                alert(`[ATENÇÃO]: Você está abaixo do peso!!\nFaça alguns exercícios e melhore sua alimentação`)
            }


            if(imc.calc >= 18.5 && imc.calc <= 24.99) {

                alert(`[PARABÉNS]: Você está com o peso normal`)
            }


            if(imc.calc >= 25 && imc.calc <= 29.99) {

                alert(`[ATENÇÃO]: Você está acima do peso`)
            }


            if(imc.calc >= 30 && imc.calc <= 34.99) {

                alert(`[ALERTA]: Você está BEM acima do peso (besidade I)\n Faça dietas e exerícios que te ajudem a emagrecer`)
            }


            if(imc.calc >= 35 && imc.calc <= 39.99) {

                alert(`[ALERTA]: Você está acima MUITO do peso (besidade II - SEVERA)`)
            }

            if(imc.calc >= 40) {

                alert(`[ALERTA]: Você está EXTREMAMENTE acima do peso (obesidade III - MÓRBIDA)\n Procure por médios para um devido tratamento`)
            }
}

function invert(){

    var inv = new Object();

    
    }
    




