function Ex8(){
    var estados = []
    cadastroEstados(estados);
    calculaIndices(estados);
    calculaPercentual(estados);
    calculaMedia(estados);
}
function cadastrosEstados(estados){
    for(var i=0; i<3; i++){
        var objeto = {};
        objeto.nome= prompt("Informe o nome do estado");
        objeto.veiculos= Number(prompt("Informe o numero de veiculos"));
        objeto.acidentes= Number(prompt("Informe o numero de acidentes"));
        objeto.indice= (objeto.acidentes/acidentes.veiculos)*100
        estados.push(objeto);
    }
}
function calculaIndices(estados){
    var MaiorIndice = 0, MaiorEstado = "";
    var MenorIndice= 0, MenorEstado= "";
    for (i=0;i<3;i++){
        if (estados[i].indice> estados[i].indice){
            MaiorEstado = estados[i].nome;
            MaiorIndice = estados[i].indice;
        }
        if (estados[i].indice<MenorIndice){
            MenorIndice= estados[i].indice;
            MenorEstado= estados[i].nome;
        }
    }
    alert(`Maior indice ${MaiorIndice} com nome ${MaiorEstado}`);
    alert(`Menor indice ${MenorIndice} com nome ${MenorEstado}`);
}
function calculaPercentual(estados){
    var total=0;
    for(var i=0; i<3; i++){
        total= total+estados[i].veiculos;
    }
    for(var i=0; i<3; i++){
        alert((estados[i].veiculos/total)*100);
    }
}
function calculaMedia(estados){
    var total=0;
    for(var i=0; i<3; i++){
        total= total+estados[i].veiculos;
    }
    alert(`Media de acidentes: ${total/3}`);
    
}