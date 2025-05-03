function consumo (distanciaPercorrida, combustivelTotal){
    let consumo = distanciaPercorrida / combustivelTotal
    return `${consumo.toFixed(3)} Km/l`
}

let distanciaPercorrida1 = 500
let distanciaPercorrida2 = 2254
let distanciaPercorrida3 = 4554

let combustivelTotal1 = 35.0
let combustivelTotal2 = 124.4
let combustivelTotal3 = 464.6

console.log(consumo(distanciaPercorrida1, combustivelTotal1))

console.log(consumo(distanciaPercorrida2, combustivelTotal2))

console.log(consumo(distanciaPercorrida3, combustivelTotal3))
