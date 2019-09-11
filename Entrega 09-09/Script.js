function Script(){
    vetStates= [];
    BIndex= 0;
    SIndex = 9999999999999999999999999;
    contCar = 0
     for (i=0; i<5; i++){
         objStates = {};
         objStates.Name = prompt("Informe o nome do estado: ");
         objStates.Cars = Number(prompt("Informe o numero de veiculos que circularam nesse estado durante o ano: "));
         objStates.Acidents = Number(prompt("Informe o numero dos acidentes que ocorretam durante este ano: "));
         if (BIndex< objStates.Cars){
            BIndex= objStates.Cars;
         }
         if (SIndex> objStates.Cars){
             SIndex= objStates.Cars;
         }
         contCar= contCar+objStates.car;
         x = objStates.Name.indexOf(BIndex);
         y = objStates.Name.indexOf(SIndex);
        }
     
     alert("O maior fluxo de carros dentre os estados cadastrado foi "+ BIndex + " do estado de " + vetStates[objStates.Name[x]]);
     alert("O menor fluxo de carros dentre os estados cadastrado foi "+ SIndex + " do estado de " + objStates.Name[y]);
     alert("");
    
}