function Script3(){
    var vet= [];
    amcAge=0, acmCEyes=0, acmBAge=0, acmMale=0, acmFemale=0;
    for (var i=1; i<5; i++){
        var Object={};
        Object.Sex= prompt("Informe o sexo da pessoa "+ i);
            if (Object.Sex == "M"){
                acmMale= acmMale+1;
            }
        Object.Hight= Number(prompt("Informe a altura da pessoa " +i));
        
        Object.Age= Number(prompt("Informe a idade do habitante " + i));
            if (Object.Age> acmBAge){
                acmBAge= Object.Age;
            }
            
        Object.ColorEyes= prompt("Informe a cor dos olhos do habitante "+i+ "A para Azuis, V para Vers ou C para Castanho");
            if (Object.Hight>1.6 && Object.ColorEyes == "C"){
                acmCEyes= acmCEyes+1;
                amcAge= amcAge+Object.Age;
            }
            if (Object.Sex == "F"){
                if (Object.Age> 20 && Object.Age<45){
                    acmFemale= acmFemale+1;
                }
                    else if(Object.ColorEyes == "V" || Object.Hight<1.6){
                        acmFemale= acmFemale+1;
                    }
            }
        vet.push(Object);

    }
    alert("A media de idade das pessoas com olhos Castanhos e com altura superior a 1.60 é de: "+ (amcAge/acmCEyes));
    alert("A maior idade entre os habitantes é de: " + (acmBAge));
    alert("O percentual de homens é : " + (acmMale/vet.length*100) + "%");
    alert("A quantidade de mulheres com idade entre 20 e 45 anos OU que tenham olhos verdes e sejam menores que 1.70 é : " + (acmFemale));
}
function Script4(){
    var vet= [];
    var acmRenda= 0, acmBAge= 0, acmSAge= 200, acmWomen= 0;
    for(i=1; i<5; i++){
        Object={};
        Object.age= Number(prompt("Insira a idade do habitante" + i));
        Object.sex= prompt("Insira o sexo do habitante " + i + ". M para Masculino e F para Feminino");
        Object.renda= Number(prompt("Informe a renda familiar do habitante " + i));
        Object.children= Number(prompt("Informe a quantidade de filhos do habitante " + i));
            acmRenda= acmRenda+Object.renda;
            if (acmBAge>Object.age){
                acmBAge= Object.age;
            }
            if (acmSAge< Object.age){
                acmSAge= Object.age;
            }
            if (Object.sex == "F" && Object.children>2){
                if(Object.renda<600){
                acmWomen= acmWomen+1;
                }
            }
    }
    alert("A media de renda dos habitantes é de: R$" + acmRenda/vet.length);
    alert("A maior idade entre os habitantes é de: "+ acmBAge);
    alert("A menor idade entre os habitantes é de: " + acmSAge);
    alert("A quantidade de mulheres com mais de dois filhos com renda inferior a R$600.00 é de "+ acmWomen);
}
function Script5(){
    var vet= []
    for(var i=0; i<5; i++){
        var objeto= {}
        objeto.codigo= Number(prompt("Informe o codigo do produto"));
        objeto.descricao= prompt("Descrição");
        objeto.qtde= Number(prompt("Informe a quantidade de sejada"));
        objeto.preco= Number(prompt("Informe o preço do produto"))
    
    for(var j=0; j<vet.length; j++){
        if(objeto.codigo<vet[j].codigo){
            vet.splice(j,0,objeto)
            break
        }
    }
    if (j==vet.length){
        vet.push(objeto);
        alert("Adicionado com sucesso")
    }
}
for(var i=0; i<vet.length; i++){
    alert(vet[i].codigo + ""+vet[i].descricao+""+vet[i].preco+""+vet[i].qtde);
}
}