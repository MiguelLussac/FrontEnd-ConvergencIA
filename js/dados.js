var evol_val = document.getElementById("evol")
var met_val = document.getElementById("metas")
var temp_val = document.getElementById("tempo")
var eng_val = document.getElementById("engaj")

var leitura_val = document.getElementById("leitura")
var escrita_val = document.getElementById("escrita")
var matematica_val = document.getElementById("matematica")
var organizacao_val = document.getElementById("organizacao")  

let escrita_bar = document.getElementById("escrita-bar")
let leitura_bar = document.getElementById("leitura-bar")
let matematica_bar = document.getElementById("matematica-bar")
let organizacao_bar = document.getElementById("organizacao-bar")


function exibir_sem() {       
        evol_val.innerHTML = "+25%"
        met_val.innerHTML = "4/6"
        temp_val.innerHTML = "5h 30m"
        eng_val.innerHTML = "89%"

        leitura_val.innerHTML = "85% <span>↗</span>"
        leitura_bar.style.width = "85%"
        escrita_val.innerHTML = "72% <span>↗</span>"
        escrita_bar.style.width = "72%"
        matematica_val.innerHTML = "78% <span>↗</span>"
        matematica_bar.style.width = "78%"
        organizacao_val.innerHTML = "65% <span>↗</span>"
        organizacao_bar.style.width = "65%"

}function exibir_mes() {
        evol_val.innerHTML = "+18%"
        met_val.innerHTML = "12/17"
        temp_val.innerHTML = "18h 45m"
        eng_val.innerHTML = "92%"

        leitura_val.innerHTML = "88% <span>↗</span>"
        leitura_bar.style.width = "88%"
        escrita_val.innerHTML = "75% <span>↗</span>"
        escrita_bar.style.width = "75%"
        matematica_val.innerHTML = "82% <span>↗</span>"
        matematica_bar.style.width = "82%"
        organizacao_val.innerHTML = "70% <span>↗</span>"
        organizacao_bar.style.width = "70%"

}function exibir_tri() {
        evol_val.innerHTML = "+42%"
        met_val.innerHTML = "32/45"
        temp_val.innerHTML = "54h 20m"
        eng_val.innerHTML = "86%"

        leitura_val.innerHTML = "92% <span>↗</span>"
        leitura_bar.style.width = "92%"
        escrita_val.innerHTML = "78% <span>↗</span>"
        escrita_bar.style.width = "78%"
        matematica_val.innerHTML = "85% <span>↗</span>"
        matematica_bar.style.width = "85%"
        organizacao_val.innerHTML = "72% <span>↗</span>"
        organizacao_bar.style.width = "72%"
}
