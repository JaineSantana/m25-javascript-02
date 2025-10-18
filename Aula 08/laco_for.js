/**
 * Uso do Laço For
 */
//  1a parte => inicialização de variáveis
//  2a parte => condição de permanência
//  3a parte => atribuição/ incremento de valor
for (let i=0; i<10; i++){
    console.log("Valor de i=" + i);
}
// Nesse caso abaixo da erro de inexistencia da variável i
// Porque pertence somente ao bloco do for a variavel i
// Por conta do let i dentro do for
console.log("Fim do For" + i);