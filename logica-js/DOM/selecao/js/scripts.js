//busca

const inputform = document.querySelector("#busca")

const botaobusca = document.querySelector("#botaobusca")

const resultadodiv = document.querySelector("#resultado")

inputform.addEventListener("keydown", (e) =>{ 
    console.log(e.key)
})

inputform.addEventListener("focus",(e)=>{
    inputform.style.backgroundColor = "#FF0"
})




inputform.addEventListener("blur",(e)=>{
    inputform.style.backgroundColor = ""
})

function searchResult(){
    const valorbusca = inputform.value.trim()
    if(valorbusca ){
        resultadodiv.textContent = `voce buscou por ${valorbusca}`
    }else{
        resultadodiv.textContent = 'por favor ,  insira algo na busca'
    }
}

botaobusca.addEventListener("click", (e)=>{
    searchResult()
})

//botao de troca de tema
const botaotrocatema = document.querySelector("#tema")
function alternartema(){
    document.body.classList.toggle("escuro")
    document.body.classList.toggle("claro")
}

botaobusca.addEventListener("click", (e)=>{
    alternartema()
})