const numero = 5 // define o numero que será analisado

let a = 0
let b = 1

if(numero === a || numero === b) {
    console.log("Numero pertence a sequência de Fibonacci")
} else {
    let c;
    let confirma = false;

while(numero > b) {
    c = a + b
    a = b
    b = c

    if(b === numero) {
        confirma = true
        break
    }

}

if(confirma) {
    console.log("Numero pertence a sequência de Fibonacci")

} else {
    console.log("Numero não pertence a sequencia de Fibonacci")
    
    }
}
