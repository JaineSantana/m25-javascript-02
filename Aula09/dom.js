/**
 * Manipulando objetos do HTML com JS
 */
const incluir = ()=>{
    // Criando um documento li para ser colocado no documento
    const li = document.createElement("li");
    //const txtCmp = document.getElementById("idtexto");
    const txtCmp = document.querySelector("#idtexto");
    //Colocando o conteudo do texto no li
    li.textContent = txtCmp.value;
    //Colocando o li no ul
    //posso usar getElementById ou querySelector("#idtexto")
    const ul = document.getElementById("idlista");
    ul.appendChild(li);
}

const remover = ()=>{
    const lis = document.querySelectorAll("#idlista li");
    const txtCmp = document.querySelector("#idtexto");
    const ul = document.querySelector("#idlista");
    //percorrendo os lis
    lis.forEach(it => {
        if (it.textContent == txtCmp.value){
            ul.removeChild(it); //Remove o li do ul
        }
    });
}

//Adicionando um evento de click no botão de incluir e remover
const btnAdicionar = document.querySelector("#idadicionar");
const btnRemover = document.querySelector("#idremover");

//Colocando o evento no btnadicionar
btnAdicionar.addEventListener('click',incluir);
btnRemover.addEventListener('click',remover);