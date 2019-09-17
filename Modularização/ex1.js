function exe1(){
    var N= Number(prompt("Informe um numero"));
    var resultado= exe1_1(N);
    alert(resultado);
}
function exe1_1(N){
    var soma= 0
    for (var i=1; i<=N; i++){
        soma = soma + i;
    }
    return soma;
}

function exe2(){
    var horas= Number(prompt("Informe as horas"));
    var minutos = Number(prompt("Informe os minutos"));
    var segundos= Number(prompt("Informe os segundps"));
    alert(resultado);
}
function exe2_2(horas, minutos, segundos){
    return horas*3600 + minutos*60 + segundos;
}

function exe3(){
    var nome1= prompt("Informe um nome");
    var nome2= prompt("Informe otro nome");
    var resultado= exe3_3(nome1, nome2);
    alert(resultado);
}

function exe3_3(nome1, nome2){
    if (nome1 == nome2){
        return 0;
    }
    else{
        for(var i=0; i<nome1.length; i++){
            if (nome1[i] != nome2[i]){
                return i+1;
            }
        }
    }
}

function exe4(){
    var raiio= Number(prompt("Informe o raio"));
    var resultado= exe4_4(raio)
    alert(resultado)
}
function exe4_4(raio){
    return(4*Math.PI*pow(raio,3))/3;
}

function exe5(){
    var N= Number(prompt("Informe um numero"));
    var result= exe5_5(N);
    alert(result);
}
function exe5_5(N){
    return (N >= 0) ? "positivo" : "negativo";
    
}