/**
 * Código que vai demonstrar o uso de arrays em JS
 */
//Definindo um array
const vetor =[];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
console.log(vetor);
vetor.push(1234); //Adiciona item
console.log(vetor);
console.log(vetor.pop()); //Remove o último elemento
console.log(vetor);
vetor.splice(1,1); //indice e quantidade, indice começa em 0
console.log(vetor);
//percorrendo o vetor com for (1º Opção)
console.log("Listando vetor com for 1º Opção");

for(let i=0;i<vetor.length;i++){
    console.log(vetor[i]);
}
//percorrendo o vetor com for (2º Opção)
console.log("Listando vetor com for 2º Opção");

for(let it of vetor){
    console.log(it);
}
//percorrendo o vetor com for (3º Opção)
console.log("Listando vetor com for 3º Opção");

vetor.forEach(it=>console.log(it));