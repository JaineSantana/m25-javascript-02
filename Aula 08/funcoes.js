/**
 * Criação e uso de Funções
 */
// Definindo a função para usá-la
function fatorial(numero) {
    let ret = 1;
    // Aqui abaixo será um laço decrescente 5 * 4 * 3 * 2
    for(let i=numero;i>1; i--){
        ret*=i; //Isso é o mesmo que ret = ret * i
    }
    return ret; // Retornando o valor
}
//Usando a Função
console.log("O fatorial de 5 é " + fatorial(5));