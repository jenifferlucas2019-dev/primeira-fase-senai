// arquivo servicos

const servicoeroWeb = document.querySelector("#servico-web")

const showButton = document.querySelector("#show")

const hideButton = document.querySelector("#hide")

showButton.addEventListener("click",()=>{
    servicoeroWeb.classList.add("show")
    servicoeroWeb.classList.remove("hide")
})

hideButton.addEventListener("click", ()=>{
    servicoeroWeb.classList.add("hide")
     servicoeroWeb.classList.remove("show")
})
