/**
 *  Aqui iremos ver como trabalhar com conjuntos em JS
 */
/* Não podemos usar dessa forma abaixo
let nome1 = "Andre";
let nome2 = "Amarildo";
...
let nome3 = "Zaqueu";
*/
// Abaixo estou definindo um vetor com 4 nomes
//Posições      0        1          2         3
let nomes = ["Andre","Amarildo","Joaquim","Zaqueu"];
console.log(nomes[2]);
// Listando os nomes usando Laço For (1º Opção)
for (let i=0;i<nomes.length;i++){
    console.log(nomes[i]);
}
console.log("Fim do for (1º Opção)");
console.log("=+".repeat(20));
// Listando os nomes usando o Laço For (2º Opção)
for(const it of nomes){
    console.log(it);
}
console.log("Fim do for (2º Opção)");
console.log("=+".repeat(20));
// Usando o While para listar os nomes
let i=0;
while(i<nomes.length){
    console.log(nomes[i++]);
}
console.log("Fim do While");