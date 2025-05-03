function calcularCombustivel(tempo, velocidade) {
    let distancia = tempo * velocidade
    let consumo = distancia / 12
    return consumo.toFixed(3)
}

let tempo1 = 10
let tempo2 = 2 
let tempo3 = 22 

let velocidade1 = 85
let velocidade2 = 92 
let velocidade3 = 67          

console.log(calcularCombustivel(tempo1, velocidade1))
console.log(calcularCombustivel(tempo2, velocidade2))
console.log(calcularCombustivel(tempo3, velocidade3))
