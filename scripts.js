
let botao = document.getElementById("botao")

let inputMoedas = document.getElementById("inputmoedas")
let select = document.getElementById("select-moedas")




async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
       return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro  = moedas.EURBRL.high

   

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("inputmoedas")
    let inputreal = document.getElementById("inputreal")


    if (select.value === "U$ Dolar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {
        let valorEmeuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmeuros.toLocaleString("de-DE", { style: 'currency', currency: 'EUR' })

    }


    inputreal.innerHTML = inputValorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


}
// ESSA FUNÇÃO É RESPONSAVEL POR TROCAR A BANDEIRA E AS MOEDAS
function trocademoeda() {
    let textoMoedas = document.getElementById("textomoeda")
    let bandeiramoedas = document.getElementById("bandeiramoedas")


    if (select.value === "U$ Dolar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiramoedas.src = "./img/estados-unidos (1) 1.png "

    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./img/euro.png"
    }

    convertermoedas()
}



botao.addEventListener("click", convertermoedas) 
select.addEventListener("change", trocademoeda)
