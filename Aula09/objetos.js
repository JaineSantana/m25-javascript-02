/**
 * Nesse Código iremos ver objetos em JS (JSON)
 */
//JSON -> JavaScript Object Notation
const meuObjeto = {
    "nome": "Jaine",
    "endereco":"Rua das Ruas",
    "numero": 15,
    "ehfumante": false,
    "ola": ()=> {
        console.log("Olá mundo!");
    },
    "telefones": {
        "residencial": "14 123456789",
        "comercial": "14 789456123"
    }
}
meuObjeto.ola();
console.log(meuObjeto);

//Transformando o objeto JSON em texto
console.log(JSON.stringify(meuObjeto));

//Tranformando um texto em JSON
const txtObjeto='{"codigo":1234,"preco":15.32,"descricao":"teste"}';

//O comando abaixo transforma de texto para objeto JSON
const obj = JSON.parse(txtObjeto);
console.log(obj);