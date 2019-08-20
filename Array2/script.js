function Ex3(){
    var vetCode=[], vetStoque=[];
    for (i=0; i<3; i++){
        vetCode.push(Number(prompt("Digite o codigo do produto")));
        vetStoque.push(Number(prompt("Digite a quantidade do produto")));
    }
    var client= Number(prompt("Informe o codigo do cliente"));
    while(client != 0){
        var codPRoduct= Number(prompt("Informe o codigo do produto"));
        var qtdeProduto= Number(prompt("Informe a quantidade do produto"));
        if (vetCode.indexOf(codPRoduct) == -1){
            alert("Não consta este produto no sistema");
        }
        else{
            if(vetStoque.indexOf(codPRoduct) - qtdeProduto <0){
                alert("Estoque indisponivel");
            }
            else{
                (vetStoque.indexOf(codPRoduct)= vetStoque.indexOf(codPRoduct))-qtdeProduto;
                alert("Compra realizada com sucesso");
            }

        }
        client= Number(prompt("Informe um novo codigo do cliente. 0 para sair"));
    }
    alert("Estoque atualizado" + vetStoque);
}
function Ex5(){
var vetLogic=[], vetProgram=[], vetBoth=[];

for (i=0; i<15; i++){
    vetLogic.push(Number(prompt("Digite o numero da matricula do aluno que cursa Logica")));
}
for (i=0; i<10; i++){
    vetProgram.push(Number(prompt("Digite o numero da maticula do aluno que cursa Liguagem")));
}
for (i=0; i<15; i++){
    for (j=0; j<10; j++){
        if (vetLogic[i]== vetProgram[j]){
            vetBoth.push(vetLogic[i]);
        }
    }
}
alert(vetBoth);  
}
function Ex6(){
    var vetName=[], vetPercent=[], vetSells=[];
    var  totalSell=0, bigSalarry=0, smallerSalary=100000000000000000, NameBig, NameSmaller;
    for (i=1; i<=10; i++){
    vetName.push(prompt("Digite o nome do vendedor" + i));
    vetSells.push(Number(prompt("Digite o total de vendas do vendedor" + i)));
    vetPercent.push(Number(prompt("Digite a porcentagem de comissão do vendedor" + i)));
    } 
    for (i=0; i<10; i++){
        alert ("O vendedor " +vetName[i] + " deve receber "+ (vetSells[i]+(vetSells[i]*vetPercent[i]/100))+ "\n");        
    }
    for (i=0; i<3; i++){
        totalSell= totalSell+vetSells[i]+(vetSells[i]*vetPercent[i]/100);
    }
    for (i=0; i<3; i++){
        if (bigSalarry<vetSells[i]){
            bigSalarry= vetSells[i];
        }
    }
    for (i=0; i<10; i++){
        if (smallerSalary>vetSells[i]){
            smallerSalary= vetSells[i];
        }
    }
    alert ("O valor total das vendas são "+totalSell);
    NameBig= vetSells.indexOf(bigSalarry);
    alert(vetName[NameBig] + "teve o maior numero de vendas, totalziando R$ " + (bigSalarry+(vetSells[NameBig]*vetPercent[i]/100)));
    NameSmaller= vetSells.indexOf(smallerSalary);
    alert(vetName[NameSmaller] + " teve o menor numero de vendas, totalizando R$ " + (  smallerSalary+(vetSells[NameSmaller]*vetPercent[i]/100)));
}