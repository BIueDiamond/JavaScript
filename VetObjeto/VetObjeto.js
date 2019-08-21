function Script(){
    var objeto= {};
    var vet=[];
    for(var i=0; i<5; i++){
    objeto.codigo= Number(prompt("Informe o codigo do produto"))
    objeto.nome= prompt("Informe o nome do cliente")
    objeto.qtd= Number(prompt("Informe a quantidade desejada"))
    objeto.preco= Number(prompt("Informe o preço do produto"))
    vet.push(objeto)
    alert("Produto criado com sucesso")
    }
    var estoque = 0;
    for (var i=0; i<5; i++){
        estoque= estoque+vet[i].qtd
    }
     alert("Quantidade em estoque: " + estoque)    
}