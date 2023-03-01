const fs = require('fs')
const jsonData = fs.readFileSync('dados.json')
const data = JSON.parse(jsonData)


let menorValor = data[0].valor
let maiorValor = data[0].valor

let mediaFaturamento = 0
let soma = 0
let diasAcimaDaMedia = 0
let diasComFaturamento = 0
data.forEach(i => { 


    if(maiorValor < i.valor){
        maiorValor = i.valor
    } 

    if(menorValor > i.valor && i.valor != 0){
        menorValor = i.valor
    }

    if(i.valor > 0){
        soma = i.valor + soma
        diasComFaturamento = diasComFaturamento + 1
    }
})

mediaFaturamento =  soma / diasComFaturamento

data.forEach(i => {
    if(i.valor>mediaFaturamento){
        diasAcimaDaMedia = diasAcimaDaMedia + 1
    }
})

console.log(`O maior valor de faturamento foi R$${maiorValor}`)
console.log(`O menor valor de faturamento foi R$${menorValor}`)
console.log(`Tiveram ${diasAcimaDaMedia} dias acima da medida de faturamento`)