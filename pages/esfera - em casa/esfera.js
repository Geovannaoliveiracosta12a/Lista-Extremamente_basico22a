function volume (raio){
    return (4 / 3) * 3.14159 * Math.pow(raio, 3)
}

let raio1 = 3
let raio2 = 15
let raio3 = 1523

console.log(`VOLUME = ${volume(raio1).toFixed(3)}`)
console.log(`VOLUME = ${volume(raio2).toFixed(3)}`)
console.log(`VOLUME = ${volume(raio3).toFixed(3)}`)