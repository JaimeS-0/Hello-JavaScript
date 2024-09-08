// Loops o bucles | repiten codigo mientras una afirmacion sea verdadera

// for 

for (let i = 0; i <= 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemnto: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

//while(true){
//    console.log("Bucle Infinito")   
//}

// do while

i = 6
do {
    console.log(`Hola numero ${i}`)
    i++
} while(i < 5)

// for of (Recorre valores de algo iterable "Estructura datos")

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myString = "Hola, JavaScript!"

for(let valor of myArray) {
    console.log(valor)
}
for(let valor of mySet) {
    console.log(valor)
}
for(let valor of myMap) {
    console.log(valor)
}
for(let valor of myString){
    console.log(valor)
}

// Buenas practicas

// Uso Break y continue

for(let i = 0; i < 10; i++) {
    if(i == 5){ //Saltar la condicion
        continue
    } else if(i == 7){ //Si encuantra el valor que esperabas y detienes el bucle
        break
    }
    
    console.log(`Hola ${i}`)
}