//toda a coleção de filmes e serie
const coleção_de_favoritos = [
    {nome_filme : "jonh wick 4", nome_serie : "one piece", canal_tv : "5", like : false},
    {nome_filme : "Top Gun: Maverick", nome_serie : "Ruptura", canal_tv : "13", like : false},
    {nome_filme : "Nada de Novo no Front", nome_serie : "NCIS serie policial", canal_tv : "7", like : false},
    {nome_filme : "O Batman", nome_serie : "A Casa do Dragão", canal_tv : "4", like : false},
    {nome_filme : "Pérola", nome_serie : "Titão", canal_tv : "2", like : false},
    {nome_filme : "Elvis", nome_serie : "Dahmer: Um Canibal Americano", canal_tv : "33", like : false},
    {nome_filme : "Avatar: O Caminho da Água", nome_serie : "Star Wars: Andor", canal_tv : "22", like : false},
    {nome_filme : "A Mulher Rei", nome_serie : "Mulher-Hulk", canal_tv : "42", like : false},
    {nome_filme : "O Cardápio", nome_serie : "Heartstopper", canal_tv : "5", like : false},
    {nome_filme : "O Desconhecido", nome_serie : "Wandinha", canal_tv : "2", like : false},
    {nome_filme : "Pantera Negra: Wakanda para Sempre", nome_serie : "senhor dos aneis", canal_tv : "4", like : false},
    {nome_filme : "O Homem do Norte", nome_serie : "1899", canal_tv : "7", like : false},
    {nome_filme : "Tudo em Todo Lugar ao Mesmo Tempo", nome_serie : "Boruto", canal_tv : "2199", like : false},
    {nome_filme : "Não, Não Olhe", nome_serie : "O Urso", canal_tv : "10", like : false},
    {nome_filme : "Ruído Branco", nome_serie : "O Senhor dos Anéis: Os Anéis de Poder", canal_tv : "50", like : false},
];
const button_sort = document.getElementById("button-sort");
const text = document.getElementById("text_filme")


let index = 0;
function sorteafilme(){
    let c = 0;
    do{
        index = Math.floor(Math.random() * 15)
        c++
    }while(c < 1)
    text.innerText = coleção_de_favoritos[index].nome_filme
    
}
button_sort.addEventListener("click", sorteafilme)



//sessão serie

const button_serie = document.getElementById("button-sort-serie");
const text_serie = document.getElementById("text_serie")

function sortea_serie(){
    let c = 0;
    do{
        index = Math.floor(Math.random() * 15)
        c++
    }while(c < 1)
    text_serie.innerText = coleção_de_favoritos[index].nome_serie
}
button_serie.addEventListener("click", sortea_serie)

//sessão canal da aplicação

const button_canal = document.getElementById("button-sort-canal");
const text_canal = document.getElementById("text_canal")

function sortea_canal(){
    let c = 0;
    do{
        index = Math.floor(Math.random() * 15)
        c++
    }while(c < 1)
    text_canal.innerText = `Canal ${coleção_de_favoritos[index].canal_tv}`
}
button_canal.addEventListener("click", sortea_canal)