function Script2(){
    var vetPeople= [];
    var acmSalary=0, acmChildren= 0, acmBSalary= 0, acmIWomen= 0, acmWomen=0;

    for (var i=1; i<4; i++){
        var Object= {};
        Object.Salary= Number(prompt("Informe o salario do habitante "+ i));
        acmSalary= acmSalary+Object.Salary;
        if (acmBSalary<Object.Salary){
            acmBSalary= Object.Salary;
        }
        Object.Age= Number(prompt("Informe a idade do habitante "+ i));
        Object.Children= Number(prompt("Informe a quantidade de filhos do habitante "+ i));
        acmChildren= acmChildren+Object.Children;
        Object.Sex= (prompt("Informe o sexo do habitante "+ i+ " F para Feminino e M para MAsculino"));
        vetPeople.push(Object);
        if (Object.Sex == "F" && Object.Salary>= 1.000){ 
            acmWomen= acmWomen+1;
        }
        if(Object.Sex == "F"){
            acmIWomen= acmIWomen+1;
        }
    }
    alert("A media de salario da população é: " + (acmSalary/vetPeople.length));
    alert("A média de filhos entre os habitantes é de : " + acmChildren/vetPeople.length);
    alert("O maior salario entre os habitantes foi de: "+ acmBSalary);
    alert("O percentual de mulheres que recebem mais de R$1.00,00 é de: " +(acmWomen/acmIWomen*100) + "%")

    
}
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