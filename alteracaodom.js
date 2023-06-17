const button_nav = document.getElementById("button-nav");
const nav_bar = document.getElementById("card-navbar");
const imagem = document.getElementById("icon")

function onnav(){
    if(nav_bar.classList.contains("hidden")){
        nav_bar.classList.remove("hidden");
       
        imagem.src = "imgs/x-square.svg"
    }else{
        nav_bar.classList.add("hidden")
        imagem.src = "imgs/list.svg"
    }
}

//sessão link da pagina de filme
//adicionando elementos que será manipulado no navbar

const link_filme = document.getElementById("filme")
const pagina_filme = document.getElementById("paragina_filme")

function onfilme(){
    if(pagina_filme.classList.contains("hidden")){
        pagina_filme.classList.remove("hidden")
    }else{
        pagina_filme.classList.add("hidden")
    }
}


//sessaõ serie
//adicionando elementos que será manipulado no navbar
const pagina_serie = document.getElementById("sorteando_series")
const link_serie = document.getElementById("serie")
function onserie(){
    if(pagina_serie.classList.contains("hidden")){
        pagina_serie.classList.remove("hidden")
    }else{
        pagina_serie.classList.add("hidden")
    }
}

//sessão canal
//adicionando elementos que será manipulado no navbar
const pagina_canal = document.getElementById("sorteando_canal")
const link_canal = document.getElementById("canal")
function oncanal(){
    if(pagina_canal.classList.contains("hidden")){
        pagina_canal.classList.remove("hidden")
    }else{
        pagina_canal.classList.add("hidden")
    }
}

link_canal.addEventListener("click", oncanal)

button_nav.addEventListener("click", onnav)
link_filme.addEventListener("click", onfilme)

link_serie.addEventListener("click", onserie)